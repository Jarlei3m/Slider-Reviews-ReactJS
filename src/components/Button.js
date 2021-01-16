import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export default function Button({index, setIndex}) {
  return (
    <>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next">
        <FiChevronRight onClick={() => setIndex(index + 1)}/>
      </button>
    </>
  )
}
