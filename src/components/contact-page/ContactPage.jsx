import React from 'react'

export const ContactPage = () => {
  return (
    <section className="contact">
          <div>
            <div>
              <h3>email</h3>
              <form action="">
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="phone"/>
                <input type="text" placeholder="subject"/>
                <textarea name="" id="">

                </textarea>
              </form>
              <button>send</button>
            </div>
            <div>
              <h3>social</h3>
              <div>
                <ul>
                  <li>linkedin</li>
                  <li>github</li>
                  <li>IG</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  )
}
