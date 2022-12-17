import React from 'react';
import {Image, FlatList, ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';

import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {styles} from '../theme/AppTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View
        style={{alignItems:"center"}}
      >
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          //Header component
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
              top: top + 20,
              marginBottom:top+20,
              paddingBottom:10,
                ...styles.globalMargin,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          //infinite scroll
          //onEndReached={loadPokemons}
          //onEndReachedThreshold={0.4}

          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;
