#!/usr/bin/env node
import { executeGame } from '../src/index.js';
import { ask, play } from '../src/games/game-calc.js';

executeGame(ask, play);