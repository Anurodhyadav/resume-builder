export const resumeUpdater = (
  resume,
  setResume,
  page,
  key,
  value,
  internal_key = null
) => {
  const UpdateData = (page, internal_key, key, value) => {
    if (!resume[page][internal_key]) {
      resume[page].push({});
    }
    resume[page][internal_key][key] = value;
    return resume[page];
  };

  if (page === "basics" && !internal_key) {
    setResume({
      ...resume,
      [page]: {
        ...resume[page],
        [key]: value,
      },
    });
  } else {
    setResume({
      ...resume,
      [page]: UpdateData(page, internal_key, key, value),
    });
  }
};
