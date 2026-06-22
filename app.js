(() => {
  const meetingSubject = encodeURIComponent('Ücretsiz danışma toplantısı talebi');
  const meetingUrl = `mailto:info@hipposoft.net?subject=${meetingSubject}`;

  function wireCallsToAction() {
    document.querySelectorAll('button').forEach((button) => {
      const label = button.textContent.trim();
      if (!label.includes('Danışma Toplantısı Planla') && !label.includes('Ücretsiz Toplantı Planla')) return;
      if (button.dataset.meetingWired) return;
      button.dataset.meetingWired = 'true';
      button.addEventListener('click', () => {
        window.location.href = meetingUrl;
      });
    });
  }

  const observer = new MutationObserver(wireCallsToAction);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', wireCallsToAction);
})();
