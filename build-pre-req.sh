#
# after following the steps below; sometimes there may still be errors, though everything is mostly setup ok.
#
# in that case; if after going through above process, we get errors again, it's a good idea to reboot - 
# and either rebooting will fix the errors.
# or else after rebooting; do a "yarn add react-native" - and then do again the "react-native run-android" or to do the build-release step)
#
#
# incase you are an experienced developer-- you can go through either all the steps or you can 
# apply your judgement on what steps are totally necessary.
#
#

killall -9 nodde

yarn 

yarn install

yarn add react-native             

yarn add babel-preset-react-native      

yarn add  @react-navigation/native@5.7.3

yarn add  @react-navigation/stack@5.9.0 @react-native-community/masked-view@0.1.10 react-native-screens@2.10.1 react-native-safe-area-context@3.1.4 react-native-gesture-handler@1.7.0

killall -9 node

# as mentioned above aleady:
#
# (sometimes if after going through above process, we get errors again, it's a good idea to reboot - and then do a "yarn add react-native" - 
# and then do again the "react-native run-android" or to do the build-release step)

