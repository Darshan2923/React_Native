import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import InputField from '../UI/InputField';
import { icons } from '../../constants';
import CustomButton from '../UI/CustomButton';
import { Link } from '@react-navigation/native';
import OAuth from './OAuth';

const Signin = () => {

  const [form,setForm]=useState({
    email:'',
    password:''
  })

  const onSignInPress= async()=>{

  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]"/>
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Welcome 👋</Text>
        </View>

        <View className="p-5">
          <InputField placeholder="Enter email" icon={icons.email} value={form.email} onChangeText={(value)=>setForm({...form,email:value})} label="Email" />
          <InputField placeholder="Enter password" icon={icons.lock} secureTextEntry={true} value={form.password} onChangeText={(value)=>setForm({...form,password:value})} label="Password" />

          <CustomButton title="Sign In" onPress={onSignInPress} className="mt-6"/>

          {/* OAuth */}
          <OAuth/>

          <Link href='/sign-up' className="text-lg text-general-200 mt-10 ">
            <Text>Don't have an account?</Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
}

export default Signin
