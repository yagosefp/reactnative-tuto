import { StyleSheet } from 'react-native';
import theme from '../../app/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  innerContainer: {
    paddingBottom: 100
  },
  imageContainer: {
    marginVertical: 20,
    height: 300
  },
  image: {
    position: 'relative',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    aspectRatio: 1
  },
  titleContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  brandText: {
    fontSize: 20,
    fontWeight: '700'
  },
  nameText: {
    display: 'flex',
    flex: 1,
    fontSize: 20
  },
  priceText: {
    fontSize: 26,
    fontWeight: '700'
  },
  sectionHeader: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 1
  }
});

export default styles;
