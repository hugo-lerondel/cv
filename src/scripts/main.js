import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/base.css';
import '../styles/layout.css';
import '../styles/sections.css';
import '../styles/print.css';

import cvData from '../data/cv.json';
import { renderCV } from './render.js';

renderCV(cvData);
