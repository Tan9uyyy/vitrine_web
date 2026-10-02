/**
 * Strict equality and alias matching between two skill terms.
 * Avoids false positives (e.g. 'C' will NEVER match 'CBF-QP', 'C++', 'CMake', etc.).
 *
 * @param {string} skillA
 * @param {string} skillB
 * @returns {boolean}
 */
export function isExactSkillMatch(skillA, skillB) {
  if (!skillA || !skillB) return false;

  const clean = (s) => s.toLowerCase().trim();
  const a = clean(skillA);
  const b = clean(skillB);

  // 1. Direct exact match
  if (a === b) return true;

  // 2. Base name comparison without parentheses (e.g. "Buzz" === "Buzz (robotique d'essaim)")
  const baseA = a.replace(/\s*\([^)]*\)/g, '').trim();
  const baseB = b.replace(/\s*\([^)]*\)/g, '').trim();
  if (baseA === baseB && baseA.length > 0) return true;

  // 3. Multi-label comparison with slash (e.g. "Git" or "GitHub" in "Git / GitHub")
  const partsA = a.split(/\s*\/\s*/);
  const partsB = b.split(/\s*\/\s*/);
  if (partsA.includes(b) || partsB.includes(a)) return true;
  if (partsA.some((pA) => partsB.includes(pA))) return true;

  // 4. Exact bilingual translations
  const bilingualPairs = [
    ['temps réel', 'real-time'],
    ['tests unitaires', 'unit testing'],
    ['documentation technique', 'technical documentation'],
    ['optimisation de performance', 'performance optimization'],
    ['microcontrôleurs', 'microcontrollers'],
    ['robotique d\'essaim', 'swarm robotics']
  ];
  for (const [fr, en] of bilingualPairs) {
    if ((a === fr && b === en) || (a === en && b === fr)) return true;
    if ((baseA === fr && baseB === en) || (baseA === en && baseB === fr)) return true;
  }

  return false;
}

/**
 * Checks if a given skill name matches a project based strictly on its associatedSkills or tags.
 *
 * @param {string} skill
 * @param {object} project
 * @returns {boolean}
 */
export function isSkillMatchingProject(skill, project) {
  if (!skill || !project) return false;

  // 1. Exact match in associatedSkills
  if (project.associatedSkills && Array.isArray(project.associatedSkills)) {
    if (project.associatedSkills.some((s) => isExactSkillMatch(skill, s))) {
      return true;
    }
  }

  // 2. Exact match in tags
  if (project.tags && Array.isArray(project.tags)) {
    if (project.tags.some((t) => isExactSkillMatch(skill, t))) {
      return true;
    }
  }

  return false;
}
