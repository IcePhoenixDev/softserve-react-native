// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

export default function App() {
  return (
    <View style={styles.screen}>
      
      {/* TODO STEP 1: build the card with View and Text (name, role, location, bio) */}
      <View style={styles.card}>
        
      {/* TODO STEP 2: add the banner and the avatar with Image */}
        <Image style ={styles.banner} resizeMode = "cover" source={require('./assets/banner.png')}></Image>
        <View style ={styles.headerRow}>
        <View style={styles.avatarContainer}>
          <Image style = {styles.avatar} source = {require('./assets/avatar.png')}></Image>
          <View style={styles.onlineBadge}></View>
        </View>
      {/* TODO STEP 3: header row and stats row with Flexbox */}
        
        <View style={styles.headerText}>
          <Text style={styles.name}>Alex Rivera</Text>
          <Text style={styles.role}>Mobile Developer</Text>
          <Text style={styles.location}>Lisbon, Portugal</Text>
        </View>
        </View>
        <Text numberOfLines={3} style={styles.bio}> {BIO} </Text>
        <View style={styles.statsRow}>
          {
            STATS.map((item, index) =>(
              <View key ={item.label} style={[styles.stats, index < STATS.length -1 && styles.statsDivider]} >
                <Text style={styles.statValue}> {item.value} </Text>
                <Text style= {styles.statLabel}> {item.label} </Text>
              </View>
            ))
          }
        </View>
        
      {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
      <View style = {styles.tags}> 
        {
        SKILLS.map((skill) =>(
        <View key = {skill} style={styles.tag}> 
        <Text style={styles.tagText}> {skill} </Text> 
        </View>
        ))}
        <View style={styles.actions}>
          <View style = {[styles.button, styles.buttonPrimary]} > 
            <Text style= {styles.text_button}> Follow </Text>
            </View>
          <View style= {[styles.button, styles.buttonSecondary]}>
            <Text style = {styles.text_button2}>Message</Text>
          </View>
        </View>
      </View>
      </View>
      {/* TODO STEP 5: polish the styles (colors, typography, shadow) */}
      </View>
      
  );
}

export const Colors ={
  background: '#EEF1F6',
  primaryLight: '#E5EDFF',
  primary: '#326FF2',
  card: '#FFFFFF',
  text: '#334155',
  muted: '#64748B',
  border: '#E2E8F0',
  online: '#22C55E',
  shadow: '#000000'
}

const styles = StyleSheet.create({
  screen:   {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },


  tags:    {  flexDirection: 'row', 
              flexWrap: 'wrap', 
              gap: 8, 
              marginTop: 16 },
  tag: {
              backgroundColor: Colors.primaryLight,
              paddingHorizontal: 12,
              paddingVertical: 7,
              borderRadius: 999,
  },
  
  tagText: {
              fontSize: 12,
              fontWeight: '600',
              color: Colors.primary,
  },

  actions: {  flexDirection: 'row', 
              gap: 12, 
              marginTop: 20,
              width: '100%', 
            },

  button:  {  flex: 1, 
              alignItems: 'center', 
              paddingVertical: 12,
              borderRadius: 12, 
              justifyContent: 'center'
            },
  buttonPrimary: {

              backgroundColor: Colors.primary,
  },
  text_button: {
              color: Colors.background,
              fontWeight: 'bold'
  },
  text_button2: {
              color: Colors.primary,
              fontWeight: 'bold'
  },
  buttonSecondary: {
              backgroundColor: Colors.card,
              borderWidth: 1,
              borderColor: Colors.primary,
  },
  card: {
              padding: 20,
              backgroundColor: Colors.card,
              borderRadius: 20,
              
              
        ...Platform.select({
          ios: {
              shadowColor: Colors.shadow,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.12,
              shadowRadius: 10,
          },
          android: {
              elevation: 5,
          },
        }),
  },

  name: {
              fontSize: 24,
              fontWeight: '700',
              color: Colors.text,
  },

  role: {
              fontSize: 16,
              fontWeight: '600',
              color: Colors.primary,
  },

  banner: {
              width: "100%",
              height: 120,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
  },

  avatar: {
              width: 96,
              height: 96,
              borderRadius: 48,
              borderWidth: 4,
              borderColor: Colors.card,
              backgroundColor: Colors.card,
  },

  avatarContainer: {
    position: 'relative',
    alignSelf: 'flex-start',
    marginTop: -48,
},

  headerRow: {
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: 12,
              marginTop: 16,
  },

  headerText: {
              flex: 1,
              flexShrink: 1,
              gap: 4,
  },

  bio: {
              marginTop: 16,
              color: Colors.text,
              fontSize: 14,
              lineHeight: 21,
  },

  location: {
              fontSize: 14,
              color: Colors.muted,
  },

  stats: {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 6,
              paddingVertical: 8,
  },

  statsDivider: {
              borderRightWidth: 1,
              borderRightColor: Colors.border,
  },

  statValue: {
              fontSize: 20,
              fontWeight: '700',
              color: Colors.text,
  },

  statLabel: {
              fontSize: 14,
              color: Colors.muted,
              marginTop: 4,
  },

  statsRow: {
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 16,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: Colors.border,
},


  onlineBadge: {
              position: 'absolute',
              width: 18,
              height: 18,
              borderRadius: 9,
              backgroundColor: Colors.online,
              borderWidth: 3,
              borderColor: Colors.card,
              right: 8,
              bottom: 5,
  },
});