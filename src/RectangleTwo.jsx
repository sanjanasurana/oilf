import React from 'react';
import { Handle } from 'react-flow-renderer';

function Rectangle2() {
  const buttonStyle = {
    width: 24,
    height: 24,
    borderRadius: '50%',
    display: 'inline-block',
    margin: '4px',
    textAlign: 'center',
    lineHeight: '24px',
    color: 'black',
    fontSize: '16px',
    backgroundColor: '#e0e0e0',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)',
    border:'1px solid black',
    position: 'relative',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 273,
    height: 117,
    backgroundColor: '#eaeaea',
    position: 'relative',
    border: '1px solid black',
  };

  const numberStyleTop = {
    position: 'absolute',
    top: '-24px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '10px',
    backgroundColor: '#a09fa4',
    width: '34px',
    height: '18px',
  };

  const numberStyleBottom = {
    position: 'absolute',
    bottom: '-24px', 
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '10px', 
    backgroundColor: '#a09fa4',
    width: '34px',
    height: '18px',
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', marginBottom: '10px', position: 'relative' }}>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{16}</div>
          <div className='text6'>8B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>124</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{14}</div>
          <div className='text6'>7B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>127</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{12}</div>
          <div className='text6'>6B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>127</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{10}</div>
          <div className='text6'>5B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>127</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{8}</div>
          <div className='text6'>4B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{6}</div>
          <div className='text6'>3B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>129</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{4}</div>
          <div className='text6'>2B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>124</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleTop}>{2}</div>
          <div className='text6'>1B</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
      </div>
      <div style={{ display: 'flex', position: 'relative' }}>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{15}</div>
          <div className='text6'>8A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{13}</div>
          <div className='text6'>7A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{11}</div>
          <div className='text6'>6A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{9}</div>
          <div className='text6'>5A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{7}</div>
          <div className='text6'>4A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{5}</div>
          <div className='text6'>3A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{3}</div>
          <div className='text6'>2A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
        <div style={{ ...buttonStyle }}>
          <div style={numberStyleBottom}>{1}</div>
          <div className='text6'>1A</div>
          <div className='blackbox11'><div className='blackboxtextsmall2'>126</div></div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle2;
