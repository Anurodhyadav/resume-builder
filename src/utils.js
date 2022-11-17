export const resumeUpdater = (resume, setResume, page, key, value) => {
  setResume({
    ...resume,
    [page]: {
      ...resume[page],
      [key]: value,
    },
  });
};
