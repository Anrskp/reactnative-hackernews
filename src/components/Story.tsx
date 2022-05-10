import React from 'react';
import {View, Text, Linking, Pressable} from 'react-native';
import styles from '../styles/styles';

interface StoryProps {
    title: string,
    user: string,
    points: number,
    timestamp: number,
    url: string,
    gotoUser: () => void,
}

const Story = (props: StoryProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <Text onPress={props.gotoUser} style={styles.text}>
        Written by <Text style={{color: 'blue'}}>{props.user}</Text>
      </Text>

      <Pressable style={styles.text} onPress={() => Linking.openURL(props.url)}>
        {({pressed}) => (
          <Text
            style={{
              textDecorationLine: 'underline',
              color: pressed ? 'red' : 'blue',
            }}>
            {props.url}
          </Text>
        )}
      </Pressable>

      <Text style={styles.text}>points : {props.points}</Text>
      <Text style={styles.text}>timestamp : {props.timestamp}</Text>
    </View>
  );
};

export default Story;
