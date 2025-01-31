import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import InputField from '../UI/InputField';
import { icons } from '../../constants';
import CustomButton from '../UI/CustomButton';
import { Link } from '@react-navigation/native';
import OAuth from './OAuth';

const Signup = () => {

  const [form,setForm]=useState({
    name:'',
    email:'',
    password:''
  })

  const onSignUpPress= async()=>{

  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]"/>
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Create Your Account</Text>
        </View>

        <View className="p-5">
          <InputField placeholder="Enter your name" icon={icons.person} value={form.name} onChangeText={(value)=>setForm({...form,name:value})} label="Name" />
          <InputField placeholder="Enter email" icon={icons.email} value={form.email} onChangeText={(value)=>setForm({...form,email:value})} label="Email" />
          <InputField placeholder="Enter password" icon={icons.lock} secureTextEntry={true} value={form.password} onChangeText={(value)=>setForm({...form,password:value})} label="Password" />

          <CustomButton title="Sign Up" onPress={onSignUpPress} className="mt-6"/>

          {/* OAuth */}
          <OAuth/>

          <Link href='/sign-in' className="text-lg text-general-200 mt-10 ">
            <Text>Already have an account?</Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>

        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
}

export default Signup
