#!/usr/bin/env node
import { runEngine } from '../src/index.js';
import { rules, generateRound } from '../src/games/game-even.js';

runEngine(rules, generateRound);
