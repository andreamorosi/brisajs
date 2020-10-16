export function observingScroll({root, rootMargin, threshold, targets}) {
  const options = {root, rootMargin, threshold, targets};
  const optionAux = {
    root: options.root,
    rootMargin: options.rootMargin,
    threshold: options.threshold
  };
  let observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      //callback
      entry.target.classList.add('loaded');
    }
  });
  },optionAux);
  options.targets.forEach(item => {
    observer.observe(item);
  });
}
