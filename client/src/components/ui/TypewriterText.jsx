import { useState, useEffect } from "react";

export const TypewriterText = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDelay = 2000,
  loop = true,
  className,
  cursorClassName = "text-green-500",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            if (loop || currentWordIndex < words.length - 1) {
              setTimeout(() => setIsDeleting(true), pauseDelay);
            }
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) =>
              loop
                ? (prev + 1) % words.length
                : Math.min(prev + 1, words.length - 1),
            );
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    loop,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className={cursorClassName}>|</span>
    </span>
  );
};
