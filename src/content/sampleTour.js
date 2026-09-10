export const SAMPLE_TOUR_CONTENT = {
  whatYoullSee: [
    'A full 360° walkthrough you can navigate room to room',
    'Tagged notes on anything flagged in the condition documentation',
    'Still-frame captures of specific areas of concern',
    'Dated condition notes for every room, included with every tour',
  ],
}

// ---------------------------------------------------------------------------
// EMBEDDING A REAL TOUR FROM RICOH360 TOURS
//
// This site is set up to embed a tour published with RICOH360 Tours (the
// official Ricoh Theta tour-hosting software). Once you've published a tour:
//
//   1. In RICOH360 Tours, open the tour and go to Share.
//   2. Copy the embed/share link (it will look like
//      https://tours.ricoh360.com/s/XXXXXXXXXXXX or similar).
//   3. Paste that link below as RICOH360_TOUR_URL.
//
// The Sample Tour page will automatically swap the "coming soon" placeholder
// for a live embedded tour as soon as this is set to a real URL.
// ---------------------------------------------------------------------------
export const RICOH360_TOUR_URL = null
