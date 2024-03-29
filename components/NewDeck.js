import React, { useState } from 'react'
import { TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import FlashyButton from './shared/FlashyButton'
import FlashyStyles from './shared/flashyStyles'
import { createDeck } from '../deck-state/actions'


const NewDeck = ({ dispatch, navigation }) => {
    const [deckTitle, setDeckTitle] = useState('')
    const isBlankTitle = deckTitle === '' || deckTitle === null
    const addDeck = () => {
        dispatch(createDeck(deckTitle))
            .then(() => setDeckTitle(''))
            .then(() => navigation.push('DeckDetail', { deck: { title: deckTitle } }))
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TextInput
                style={[FlashyStyles.textInput, FlashyStyles.roundedBorder]}
                value={deckTitle}
                onChangeText={setDeckTitle}
                placeholder='What is the name of your deck?' />
            <FlashyButton onPress={addDeck} disabled={isBlankTitle} >
                Create Deck
            </FlashyButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },

})


export default connect()(NewDeck)