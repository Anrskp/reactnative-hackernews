import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from '../styles/styles';

const Author = () => {
  const user = useSelector((state: any) => state.stories.user);
  return (
    <View style={styles.card}>
      <Text style={styles.text}>username: {user.id} </Text>
      <Text style={styles.text}>karma score: {user.karma} </Text>
      <Text style={styles.text}>created at: {user.created} </Text>
      <Text style={styles.text}>posts: {user.submitted?.length} </Text>
    </View>
  );
};

export default Author;
