import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import type { Tutorial, Program, Speakers, Materials, Reading } from '@/types/content';

const contentDir = path.join(process.cwd(), 'content');

export function loadTutorial(): Tutorial {
  const filePath = path.join(contentDir, 'tutorial.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as Tutorial;
}

export function loadProgram(): Program {
  const filePath = path.join(contentDir, 'program.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as Program;
}

export function loadSpeakers(): Speakers {
  const filePath = path.join(contentDir, 'speakers.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as Speakers;
}

export function loadMaterials(): Materials {
  const filePath = path.join(contentDir, 'materials.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as Materials;
}

export function loadReading(): Reading {
  const filePath = path.join(contentDir, 'reading.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as Reading;
}