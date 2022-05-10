import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Author from '../components/Author';

const AuthorProfile: React.FC = () => {
  const user = useSelector((state: any) => state.stories.user);
  return <View>{user && <Author />}</View>;
};

export default AuthorProfile;
