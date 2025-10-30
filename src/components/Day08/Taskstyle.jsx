export default function() {
  const [rows, setRows] = useState(initialData);

  return (
    <div style={{ padding: 20 }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#00796B', color: 'white' }}>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Gender</th>
            <th style={thStyle}>Address</th>
            <th style={thStyle}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} style={idx % 2 === 0 ? {} : { backgroundColor: '#f5f5f5' }}>
              <td style={tdStyle}>{row.firstName}</td>
              <td style={tdStyle}>{row.lastName}</td>
              <td style={tdStyle}>{row.email}</td>
              <td style={tdStyle}>{row.gender}</td>
              <td style={tdStyle}>{row.address}</td>
              <td style={tdStyle}>{row.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: '8px',
  textAlign: 'left',
  border: '1px solid #ddd',
};

const tdStyle = {
  padding: '8px',
  border: '1px solid #ddd',
};
