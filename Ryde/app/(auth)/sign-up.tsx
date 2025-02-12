import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { icons, images } from '@/constants';
import { fetchAPI } from '@/lib/fetch';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ReactNativeModal } from 'react-native-modal'

const SignUp = () => {
    const { isLoaded, signUp, setActive } = useSignUp()
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [verification, setVerification] = useState({
        state: "default",
        error: "",
        code: ""
    })
    const router = useRouter();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const onSignUpPress = async () => {
        if (!isLoaded) return

        try {
            await signUp.create({
                emailAddress: form.email,
                password: form.password,
            })


            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            setVerification({ ...verification, state: 'pending' });
        } catch (err: any) {
            Alert.alert('Error', err.errors[0].longMessage);
        }
    }

    // Handle submission of verification form
    const onVerifyPress = async () => {
        if (!isLoaded) return;

        try {
            const signUpAttempt = await signUp.attemptEmailAddressVerification({
                code: verification.code,
            });
            if (signUpAttempt.status === 'complete') {

                // below code is for storing in db
                await fetchAPI('/(api)/user', {
                    method: "POST",
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        clerkId: signUpAttempt.createdUserId,
                    })
                })


                await setActive({ session: signUpAttempt.createdSessionId });
                setVerification({ ...verification, state: 'success' });
                console.log('Verification successful'); // Add this log
            } else {
                setVerification({ ...verification, error: 'Verification failed', state: 'failed' });
                console.error('Verification failed:', JSON.stringify(signUpAttempt, null, 2));
            }
        } catch (err: any) {
            setVerification({ ...verification, error: err.errors[0].longMessage, state: 'failed' });
            console.error('Verification error:', JSON.stringify(err, null, 2));
        }
    }

    return (
        <ScrollView className='flex-1 bg-white'>
            <View className='flex-1 bg-white'>
                <View className='relative w-full h-[250px]'>
                    <Image
                        source={images.signUpCar}
                        className='z-0 w-full h-[250px]'
                    />
                    <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>
                        Create Your Account
                    </Text>
                </View>
                <View className='p-5'>
                    <InputField label="Name" placeholder="Enter your name" icon={icons.person} value={form.name} onChangeText={(value) => setForm({ ...form, name: value })} />
                    <InputField label="Email" placeholder="Enter your email" icon={icons.email} value={form.email} onChangeText={(value) => setForm({ ...form, email: value })} />
                    <InputField label="Password" placeholder="Enter your password" icon={icons.lock} secureTextEntry={true} value={form.password} onChangeText={(value) => setForm({ ...form, password: value })} />
                    <CustomButton title='Sign Up' onPress={onSignUpPress} className='mt-6' />
                    <OAuth />
                    <Link href='/sign-in' className='text-lg text-center text-general-200 '>
                        <Text>Already have an account? </Text>
                        <Text className='text-primary-500'>Log In</Text>
                    </Link>
                </View>

                <ReactNativeModal isVisible={verification.state === 'pending'} onModalHide={() => {
                    console.log('Modal hidden'); // Add this log
                    if (verification.state === 'success') setShowSuccessModal(true);
                }}>
                    <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
                        <Text className='text-2xl font-JakartaExtraBold mb-2'>Verification</Text>
                        <Text className="font-Jakarta mb-5">
                            We've sent a verification code to {form.email}
                        </Text>
                        <InputField
                            label='Code'
                            icon={icons.lock}
                            placeholder='12345'
                            value={verification.code}
                            keyboardType='numeric'
                            onChangeText={(code: string) => setVerification({ ...verification, code })}
                        />

                        {verification.error && (
                            <Text className='text-red-500 text-sm mt-1'>
                                An error occured.Please try again!
                            </Text>
                        )}

                        <CustomButton title='Verify Email' onPress={onVerifyPress} className='mt-5 bg-success-500' />
                    </View>
                </ReactNativeModal>

                <ReactNativeModal isVisible={showSuccessModal}>
                    <View className='bg-white px-7 py-9 rounded-2xl min-h-[300px]'>
                        <Image source={images.check} className='w-[110px] h-[110px] mx-auto my-5' />
                        <Text className='text-3xl font-JakartaSemiBold text-center mt-2'>
                            You have successfully verified your account.
                        </Text>
                        <CustomButton title='Browse Home' onPress={() => {
                            setShowSuccessModal(false);
                            console.log('Navigating to home'); // Add this log
                            router.push('/(root)/(tabs)/home');
                        }} className='mt-5' />
                    </View>
                </ReactNativeModal>
            </View>
        </ScrollView>
    );
}

export default SignUp