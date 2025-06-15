
function Childcomponent(props){
    return(
    <>
     <div style={{
      position: 'relative', flex: '1 1 300px',
      minWidth: '300px',
      maxWidth: '100%', color: 'white'
     }}>
      <img
        src={props.img}
        alt=""
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
        }}
      >
        <h3 style={{ fontSize: '19px', fontWeight: '700', margin: 0 }}>
          {props.header}
        </h3>
        <p style={{ fontSize: '14px', fontWeight: '400', marginTop: '8px' }}>
          {props.author}
        </p>
        <figure
          style={{
            backgroundColor: 'white',
            height: '1px',
            width: '100%',
            margin: '16px 0 20px 0',
          }}
        ></figure>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a
            href="#"
            style={{
              fontSize: '13px',
              fontWeight: '700',
              color: 'white',
              textDecoration: 'none',
              letterSpacing: '2px',
            }}
          >
            READ STORY
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="white" fillRule="evenodd" stroke="#fff">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </div>
      </div>
    </div>

    </>
    )
}

export default Childcomponent