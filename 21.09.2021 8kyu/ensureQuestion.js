function ensureQuestion(s) {
  if (s.includes("?")) {
    return s;
  } else {
    return s + "?";
  }
}

// refactor

function ensureQuestion(s) {
  return s.includes("?") ? s : s + "?";
}
