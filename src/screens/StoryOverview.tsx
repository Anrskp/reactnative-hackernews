import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Story from '../components/Story';
import * as actions from '../store/actions';

interface StoryOverviewProps {
  navigation: any;
}

const StoryOverview: React.FC<StoryOverviewProps> = ({navigation}) => {
  const stories = useSelector((state: any) => state.stories.stories);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchStories());
  }, []);

  return (
    <View>
      <FlatList
        data={stories}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <Story
            title={itemData.item.title}
            user={itemData.item.by}
            points={itemData.item.score}
            timestamp={itemData.item.time}
            score={itemData.item.score}
            url={itemData.item.url}
            gotoUser={() => {
              dispatch(actions.fetchUser(itemData.item.by));
              navigation.navigate('AuthorProfile');
            }}
          />
        )}
      />
    </View>
  );
};

export default StoryOverview;
