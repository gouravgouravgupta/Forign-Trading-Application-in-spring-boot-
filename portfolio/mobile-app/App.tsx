import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        
        {/* Hero Section */}
        <LinearGradient
          colors={['#0a1428', '#0ea5e9', '#0a1428']}
          style={styles.heroSection}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.greeting}>Hello, I'm</Text>
          <Text style={styles.name}>Gourav Gupta</Text>
          <Text style={styles.title}>Full Stack Developer</Text>
          <Text style={styles.subtitle}>Building beautiful digital experiences</Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => openLink('https://github.com/gouravgouravgupta')}
            >
              <Text style={styles.buttonText}>View GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => openLink('mailto:contact@gouravgupta.dev')}
            >
              <Text style={styles.buttonTextSecondary}>Contact Me</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionText}>
            I'm a passionate developer with expertise in building modern web applications and mobile apps.
            With a strong foundation in both frontend and backend technologies, I create seamless digital
            experiences that users love.
          </Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.divider} />
          
          <View style={styles.skillCategory}>
            <Text style={styles.categoryTitle}>Frontend</Text>
            <View style={styles.skillTags}>
              {['React', 'Next.js', 'TypeScript', 'React Native'].map((skill) => (
                <View key={skill} style={styles.skillTag}>
                  <Text style={styles.skillTagText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.skillCategory}>
            <Text style={styles.categoryTitle}>Backend</Text>
            <View style={styles.skillTags}>
              {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map((skill) => (
                <View key={skill} style={styles.skillTag}>
                  <Text style={styles.skillTagText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          <View style={styles.divider} />
          
          {[
            { title: 'E-Commerce Platform', desc: 'Full-stack solution with payment integration' },
            { title: 'Task Management App', desc: 'Real-time collaborative task management' },
            { title: 'AI Chat Application', desc: 'Intelligent chatbot powered by OpenAI' },
          ].map((project, index) => (
            <View key={index} style={styles.projectCard}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDesc}>{project.desc}</Text>
            </View>
          ))}
        </View>

        {/* Contact Section */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Get In Touch</Text>
          <View style={styles.divider} />
          
          <TouchableOpacity 
            style={styles.contactButton}
            onPress={() => openLink('mailto:contact@gouravgupta.dev')}
          >
            <Text style={styles.contactButtonText}>📧 Email</Text>
            <Text style={styles.contactValue}>contact@gouravgupta.dev</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactButton}
            onPress={() => openLink('https://github.com/gouravgouravgupta')}
          >
            <Text style={styles.contactButtonText}>💻 GitHub</Text>
            <Text style={styles.contactValue}>@gouravgouravgupta</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactButton}
            onPress={() => openLink('https://linkedin.com/in/gouravgupta')}
          >
            <Text style={styles.contactButtonText}>💼 LinkedIn</Text>
            <Text style={styles.contactValue}>Gourav Gupta</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 Gourav Gupta</Text>
          <Text style={styles.footerSubtext}>Built with React Native & Expo</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1428',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  heroSection: {
    paddingTop: 80,
    paddingBottom: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    color: '#38bdf8',
    marginBottom: 8,
  },
  name: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#e5e7eb',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#0ea5e9',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: '#0ea5e9',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#38bdf8',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  lastSection: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  divider: {
    width: 60,
    height: 4,
    backgroundColor: '#0ea5e9',
    marginBottom: 24,
  },
  sectionText: {
    fontSize: 16,
    color: '#9ca3af',
    lineHeight: 24,
  },
  skillCategory: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#e5e7eb',
    marginBottom: 12,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    backgroundColor: 'rgba(14, 165, 233, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(14, 165, 233, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skillTagText: {
    color: '#38bdf8',
    fontSize: 14,
  },
  projectCard: {
    backgroundColor: 'rgba(14, 165, 233, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(14, 165, 233, 0.2)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  projectDesc: {
    fontSize: 14,
    color: '#9ca3af',
  },
  contactButton: {
    backgroundColor: 'rgba(14, 165, 233, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(14, 165, 233, 0.2)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  contactButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 14,
    color: '#38bdf8',
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(14, 165, 233, 0.2)',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 14,
    marginBottom: 4,
  },
  footerSubtext: {
    color: '#6b7280',
    fontSize: 12,
  },
});
