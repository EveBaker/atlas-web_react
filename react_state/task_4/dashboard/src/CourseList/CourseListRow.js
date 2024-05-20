import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#f5f5f5ab",
  },
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  tableData: {
    borderBottom: '2px solid lightgrey',
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const appliedStyle = isHeader ? styles.headerRow : (isChecked ? styles.rowChecked : styles.row);

  if (isHeader) {
    return (
      <tr className={css(appliedStyle)}>
        {textSecondCell ? (
          <>
            <th className={css(styles.tableData)}>{textFirstCell}</th>
            <th className={css(styles.tableData)}>{textSecondCell}</th>
          </>
        ) : (
          <th colSpan="2" className={css(styles.tableData)}>{textFirstCell}</th>
        )}
      </tr>
    );
  } else {
    return (
      <tr className={css(appliedStyle)}>
        <td className={css(styles.tableData)}>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          {textFirstCell}
        </td>
        <td className={css(styles.tableData)}>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
