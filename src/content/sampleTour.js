export const SAMPLE_TOUR_CONTENT = {
  whatYoullSee: [
    'A full 360° walkthrough you can navigate room to room',
    'Tagged notes on anything flagged in the condition documentation',
    'Still-frame captures of specific areas of concern',
    'Dated condition notes for every room, included with every tour',
  ],
}

// ---------------------------------------------------------------------------
// SAMPLE TOUR MEDIA (Home page hero + /sample-tour page)
//
// TOUR_EMBED_URL: an interactive 3D tour shown in an iframe. Takes priority
// over the video when set. For Matterport, the model must be Public or
// Unlisted (Private models won't load for visitors), and the URL format is:
//   https://my.matterport.com/show/?m=MODEL_ID&play=1&qs=1
//
// SAMPLE_TOUR_VIDEO: a walkthrough video in /public, shown when there's no
// embed URL. Leave both null to show the "coming soon" placeholder.
// ---------------------------------------------------------------------------
export const TOUR_EMBED_URL = null
export const SAMPLE_TOUR_VIDEO = '/videos/sample-tour.mp4'
