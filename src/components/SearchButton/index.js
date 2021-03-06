import React, {useState} from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import SearchHeader from 'react-native-search-header';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { State } from 'react-native-gesture-handler';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

 const SearchButton = ({currentInventory}) => {
    dispatch = useDispatch();
    const [collectName, setCollectName] = useState("");
    const searchHeaderRef = React.useRef(null);

    function filterSearch(){
        dispatch({ type: 'FILTER_SEARCH', inventories: [currentInventory, collectName.toLowerCase()] }) ;
    }

    return (
        <View style = { styles.container }>
            <View style = { styles.header }>
               
                <Button
                    type='clear'
                    icon={<Icon name="search" color="white" size={25}  />}
                    onPress = {() => searchHeaderRef.current.show()}
                />
                
            </View>
            
            <SearchHeader
                ref = { searchHeaderRef }
                placeholder = 'Search...'
                placeholderColor = 'gray'
                enableSuggestion={false}
                entryAnimation={"from-left-side"}
                headerHeight={70}
                
                onHide={() =>{searchHeaderRef.current.clear();}}
                onSearch={filterSearch()}
                
                

                onClear = {() => {
                    console.log(`Clearing input!`);
                }}
                onChangeText={(text) => {setCollectName(text)}}
                onGetAutocompletions = {async (text) => {
                    if (text) {
                        const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                            method: `get`
                        });
                        const data = await response.json();
                        return data[1];
                    } else {
                        return [];
                    }
                }}
            />
        </View>
    );
}

export default SearchButton;