import React, { useState } from 'react';

const patchNotes = `
v1.0.3 notes
- fixed the previous patch notes where i said "this is a reproductive use of my time" instead of "a productive use of my time"
- this is anything but reproductive

v1.0.2 notes
what even was this week? got inspired on monday to learn coding. found out monday evening that i don't really need to do that, since ai has apparently taken over. stayed up until tuesday morning coding my heart out, pushed v0.1.0. literally pushed, like giving birth. then shit got serious. here's a laundry list of all that i've done:
- turns out i added all the subpage codes INTO the index.html page, and gemini distorted them to make them less funny versions of themselves (like tuesday.html was supposed to show the opposite answer, not the actual one). so i extracted them and connected subpages as linked urls so that i can grow cagla.dev without it becoming this massive monster code.
- i thought i was pushing to github from vscode. turns out github was pushing to vscode. oof. had to redo the entire site from scratch because i didn't know how to fix it. built the local to vscode to github to netlify for continuous deployment pipeline. i thought it'd be super hard but it was moderately hard. atp i've started thinking... do i have a gift for this??? or??
- added 28 subpages in total so far to the website. i can wax poetic about them for eons. working on tiny harvest was just the most alive i've felt in years (i'm hearing how that sounds & i'm not happy). that being said, tiny harvest failed to launch properly on a friend's computer, so i'll need to check and... debug? or whatever? idk
- added 17 levels to tiny harvest btw
- added the walk, a softly sad game about walking in a forest with your partner
- added so many other things. this is so much fun i can't believe how fun it is
- added favicons to all subpages. this was a drag but now it looks so cute!!
- added a go back button to all subpages, fixed the menu & go back ui on all subpages (still could use some fixing though)
- finally fixed the startup generator mini app to run more smoothly and honestly look better
- avoided so many real-life responsibilities while i was having this adhd crash out that i got intervention'ed by 2 colleagues, 1 husband, multiple friends
- it's ok i could be doing meth instead this is a reproductive use of my time and don't tell me otherwise or i'm gonna leak the epstein files
`;

const PatchNotes: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs w-[90vw] pointer-events-auto">
      <button
        className="bg-fuchsia-600 text-white px-3 py-1 rounded-t-lg shadow-lg text-xs font-bold tracking-wide hover:bg-fuchsia-800 transition-all"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Hide patch notes' : 'Show patch notes'}
        style={{ minWidth: 100 }}
      >
        {open ? 'close patch notes' : 'patch notes'}
      </button>
      {open && (
        <div className="bg-white/95 border-2 border-fuchsia-400 rounded-b-lg shadow-xl p-3 max-h-72 overflow-y-auto text-xs whitespace-pre-line font-mono text-fuchsia-900 animate-fade-in">
          {patchNotes}
        </div>
      )}
    </div>
  );
};

export default PatchNotes;
