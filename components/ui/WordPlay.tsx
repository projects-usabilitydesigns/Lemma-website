const LEMMA_LETTER_COLORS = ["#009352", "#ED2E80", "#1581C5", "#74BE44", "#F05A27"] as const;
const LEMMA = "lemma";

/** Colors the Lemma letters in a coined word; prefix/suffix inherit the parent color. */
export function WordPlay({ word }: { word: string }) {
  const start = word.toLowerCase().indexOf(LEMMA);

  return (
    <>
      {word.split("").map((letter, i) => {
        const color =
          start >= 0 && i >= start && i < start + LEMMA.length
            ? LEMMA_LETTER_COLORS[i - start]
            : undefined;
        return (
          <span key={`${letter}-${i}`} style={{ color }}>
            {letter}
          </span>
        );
      })}
    </>
  );
}
