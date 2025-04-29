/**
 * Google Meet User Draw
 * This script randomly selects a participant from a Google Meet call and highlights them in the participant list.
 * 
 * Use case:
 * - Randomly select a participant for a prize or special mention during a meeting.
 * - Ensure the selection process is fair and unbiased.
 * - Log the selection process for transparency.
 */
(() => {
    // 1. Select all list-item elements that represent participants
    const items = Array.from(
      document.querySelectorAll('div[role="listitem"][data-participant-id]')
    );
  
    // 2. Extract each participant’s aria-label (their display name)
    const names = items.map(el => el.getAttribute('aria-label'));
  
    // 3. Remove duplicates in case someone is connected on multiple devices
    const uniqueNames = [...new Set(names)];
  
    if (uniqueNames.length === 0) {
      console.warn('No participants found.');
      return;
    }
  
    // 4. Pick a random name
    const idx = Math.floor(Math.random() * uniqueNames.length);
    const winner = uniqueNames[idx];
  
    // 5. Log the winner and highlight them in the list
    console.log(`🎉 Lucky winner: ${winner}`);
    const winnerEl = items.find(el => el.getAttribute('aria-label') === winner);
    if (winnerEl) {
      winnerEl.style.background = 'yellow';
      winnerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  
    return winner;
  })();
