import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { GLView } from 'expo-gl';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Animated.Text entering={FadeInDown} style={styles.title}>Gourav Gupta</Animated.Text>
      <Animated.Text entering={FadeInDown.delay(100)} style={styles.subtitle}>Web and Mobile Developer</Animated.Text>
      <View style={styles.glContainer}>
        <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />
      </View>
    </View>
  );
}

function onContextCreate(gl: WebGLRenderingContext) {
  // Simple clear color loop for visual 3D-like effect placeholder
  const render = () => {
    gl.clearColor(Math.random(), 0.47, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.endFrameEXP();
    requestAnimationFrame(render);
  };
  render();
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 64, paddingHorizontal: 20, backgroundColor: 'white' },
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#4b5563', marginTop: 6 },
  glContainer: { height: width * 0.7, borderRadius: 16, overflow: 'hidden', marginTop: 24, borderWidth: 1, borderColor: '#e5e7eb' }
});
