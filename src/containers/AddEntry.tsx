import React, { FunctionComponent, useState, useEffect } from 'react';
import { IoAdd, IoCheckmark, IoClose } from 'react-icons/io5';

import { useIsAddingEntry, useAddEntry } from '../state';

import styles from './AddEntry.module.css';

interface Props {}

export const AddEntry: FunctionComponent<Props> = ({}) => {
  const [isAddingEntry, setIsAddingEntry] = useIsAddingEntry();
  const addEntry = useAddEntry();
  const [entryDescription, setEntryDescription] = useState<
    undefined | string
  >();

  useEffect(() => {
    setEntryDescription('');
  }, [isAddingEntry]);

  return (
    <div
      className={`${styles.addEntry} fixed bottom-0 ${
        isAddingEntry ? 'h-full pt-3' : 'h-20'
      } pb-3 w-[inherit]`}
    >
      <div className="bg-lightBgDarker2 w-full h-full rounded-lg p-3">
        {isAddingEntry ? (
          <div className="h-full relative pt-10 text-lg">
            <span
              className="block h-full"
              data-placeholder="What did you have today?"
              contentEditable
              ref={(el) => {
                el?.focus();
              }}
              onInput={(ev) => setEntryDescription(ev.currentTarget.innerText)}
            />
            <div className="absolute top-1 right-1">
              {/* This and the buttons below should be a reusable component */}
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
            <div className="absolute bottom-1 right-1">
              <button
                className="h-10 aspect-[1]"
                onClick={() => {
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
                <div className="mx-auto w-fit">
                  <IoCheckmark size={30} />
                </div>
              </button>
            </div>
          </div>
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
