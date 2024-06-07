import React from 'react';

const AppOpened = ({ file }) => {
    

  return (
    <>
    {file === null ? (
        <p></p>
      ) : (
        Object.keys(file).map(day => (
          <div key={day}>
            <div>
              {Object.keys(file[day]).map(month => (
                <div key={month}>
                  {month !== '_id' && (
                    <div
                      style={{
                        backgroundColor:
                          file[day][month] > 40
                            ? '#03FFD1'
                            : '#386C78' && file[day][month] > 20
                            ? '#17C8B0'
                            : '#386C78' && file[day][month] > 10
                            ? '#24A399'
                            : '#386C78',
                      }}
                    >
                      {file[day][month]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
      
    </>
  );
};

export default AppOpened;
