import React , {Component} from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'


// Padding for bottom.
// Lets text stay in bounds of scroll view.
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
};

// A Read only terms and conditions.
class TermsAndConditions extends Component{

  render(){
    return (
     <View style={styles.container}>
            <ScrollView 
            style={styles.tcContainer}
            onScroll={({nativeEvent}) => {
                if (isCloseToBottom(nativeEvent)) {
                  this.setState({
                      accepted: true
                  })
                }
              }}
            >
                {/** tcP is terms and conditions Paragraph and tcL is terms and conditions List. */}
                <Text style={styles.tcP}>Welcome to our App. If you continue to browse and use this App, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [business name]’s relationship with you in relation to this App. If you disagree with any part of these terms and conditions, please do not use our App.</Text>
                    <Text style={styles.tcL}>{'\u2022'} The content of the pages of this App is for your general information and use only. It is subject to change without notice.</Text>
                    <Text style={styles.tcL}>{'\u2022'} This App doesnt use cookies but. Idk how that will work but nws no cookies.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this App for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Your use of any information or materials on this App is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this App meet your specific requirements.</Text>
                    <Text style={styles.tcL}>{'\u2022'} This App may contain material which is owned, licensed or pirated. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</Text>
                    <Text style={styles.tcL}>{'\u2022'} Unauthorised use of this App may give rise to a claim for damages and/or be a criminal offence.</Text>
                <Text style={styles.tcP}>This is the creator of this TravelApp and welcome to my TedTalk</Text>
                <Text style={styles.tcP}> </Text>
            </ScrollView>
      </View>
    );
  }

}
const { width , height } = Dimensions.get('window');

const styles = {

  container:{
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
      fontSize: 22,
      alignSelf: 'center'
  },
  tcP: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcL:{
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 12
  },
  tcContainer: {
      marginTop: 15,
      marginBottom: 15,
      height: height * .7
  },

}

export default TermsAndConditions;