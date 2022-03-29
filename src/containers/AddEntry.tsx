import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { IoAdd, IoCheckmark, IoClose } from 'react-icons/io5';

import { useIsAddingEntry, useAddEntry } from '../state';
import { SpacerVXS } from '../components';

import styles from './AddEntry.module.css';

export const AddEntry: FunctionComponent = () => {
  const [isAddingEntry, setIsAddingEntry] = useIsAddingEntry();
  const addEntry = useAddEntry();
  const [entryDescription, setEntryDescription] = useState<
    undefined | string
  >();

  useEffect(() => {
    setEntryDescription('');
  }, [isAddingEntry]);

  const handleKeyDown = useCallback(
    (eve: KeyboardEvent) => {
      if (eve.key === 'Escape') {
        setIsAddingEntry(false);
      }
    },
    [setIsAddingEntry]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    return () => document.body.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className={`${styles.addEntry} fixed bottom-0 ${
        isAddingEntry ? 'h-full pt-3' : 'h-20'
      } pb-3 w-[inherit]`}
    >
      <div className="bg-lightBgDarker2 w-full h-full rounded-lg p-4">
        {isAddingEntry ? (
          <form
            className="flex flex-col h-full"
            onSubmit={() => {
              if (entryDescription) {
                const d = new Date();
                addEntry(
                  {
                    day: d.getDate(),
                    month: d.getMonth(),
                    year: d.getFullYear(),
                  },
                  {
                    createdAt: d.toISOString(),
                    description: entryDescription,
                  }
                );
                setIsAddingEntry(false);
              }
            }}
          >
            <div className="flex flex-col h-full text-lg">
              <div className="outline-dashed outline-2 outline-teal h-full">
                <span
                  className="block bg-lightBgDarker1 p-3 h-full outline-none"
                  data-placeholder="What did you have today?"
                  contentEditable
                  ref={(el) => {
                    el?.focus();
                  }}
                  onInput={(ev) =>
                    setEntryDescription(ev.currentTarget.innerText)
                  }
                />
              </div>
              <SpacerVXS />
              <div className="flex justify-between flex-row-reverse">
                {/* This and the buttons below should be a reusable component */}
                <button type="submit" className="h-10 aspect-[1]">
                  <div className="mx-auto w-fit">
                    <IoCheckmark size={30} />
                  </div>
                </button>
                <button
                  className="h-10 aspect-[1]"
                  onClick={() => {
                    setIsAddingEntry(() => false);
                  }}
                >
                  <div className="mx-auto w-fit">
                    <IoClose size={30} />
                  </div>
                </button>
              </div>
            </div>
          </form>
        ) : (
          <button
            className="w-full h-full"
            onClick={() => {
              setIsAddingEntry((v) => !v);
            }}
          >
            <div className="mx-auto w-fit">
              <IoAdd size={25} className="h-10 aspect-[1]" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
