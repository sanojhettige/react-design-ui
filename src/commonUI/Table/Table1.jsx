import React from "react";
import PropTypes from "prop-types";
import { UniversityCard } from "common-ui/Card";
import Flex from 'common-ui/Flex';

import { Table1Container } from "./styles";

function Table1({
  data,
  ...otherProps
}) {
  const titleFields = data[0]?.data || [];
  return (
    <Table1Container>
      <div className="table-container">
      <div className="colum-container">

                  <div className="header-card empty-card">
                    </div>
                    <div className="table-body">
                    {titleFields.map(field => <div className={field.highlighted ? 'highlighted head-td' : 'head-td'}><span>{field.title}</span> {field.info && <span><i className="icon-info" /></span>}</div>)}
                    </div>
                    </div>

            {data.map(university => (
                <div className="colum-container">
                  <div className="header-card">
                    <UniversityCard hideLike key={university.id} size={1} {...university}/>
                </div>
                <div className="table-body">
                  {university.data?.map(row => (
                    <div className={row.highlighted ? 'highlighted value-td' : 'value-td'}>
                      {row.icon ? (<div><i className={`icon-${row.value}`} /></div>): row.value}
                    </div>
                  ))}
                  </div>
                </div>
                
            ))}
      </div>
    </Table1Container>
  );
}

Table1.propTypes = {
    data: PropTypes.array,
};

Table1.defaultProps = {
    data: []
};

export default Table1;
