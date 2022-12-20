import React, { useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import {styles as globalStyles} from '../theme/AppTheme'
import { PokemonCard } from '../components/PokemonCard';
import Loading from '../components/Loading';
import { SearchInput } from '../components/SearchInput';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';
import { useEffect } from 'react';


const screenWidth=Dimensions.get('window').width

export const SearchScreen = () => {
    const {top} =useSafeAreaInsets();
    const {isFetching,simplePokemonList}=usePokemonSearch()
    const [pokemonFilter, setPokemonFilter] = useState<SimplePokemon[]>([])
    const [term, setTerm] = useState('')

    useEffect(() => {

      if(term.length===0){
        return setPokemonFilter([])
      }
      if(isNaN(Number(term))){

        setPokemonFilter(
          simplePokemonList.filter(
            poke=>poke.name.toLowerCase().includes(term.toLowerCase()))
        )
      }else{
        const pokemonByIde= simplePokemonList.find(poke=>poke.id===term)
        setPokemonFilter(
         (pokemonByIde)?[pokemonByIde]:[]
        )
      }
    }, [term])
    

    if(isFetching){
      return <Loading/>
    }
  return (
<View style={{...styles.container,marginTop:top +10,marginHorizontal:20}}>
     <SearchInput
        onDebounce={(value)=>setTerm(value)}
        style={{
          position:'absolute',
          zIndex:999,
          width:screenWidth,
          top:top+10
        }}
     /> 

     <FlatList
          data={pokemonFilter}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          //Header component
          ListHeaderComponent={
            <Text
              style={{
                ...globalStyles.title,
              paddingBottom:10,
              marginTop:top + 80,
                ...globalStyles.globalMargin,
              }}>
                {term}
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
 )
};


const styles = StyleSheet.create({
    container:{
      flex:1
    }
});
export default SearchScreen;
