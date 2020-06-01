# react-native-auto-infinite-scroll
- 선언
```
import RNInfiniteScroll from 'react-native-auto-infinite-scroll';
```
- 사용
```
<RNInfiniteScroll
    data={[{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }]}
    renderItem={({ item }) => <View style={styles.listItem}><Text>{item.key}</Text></View>}/>
```
