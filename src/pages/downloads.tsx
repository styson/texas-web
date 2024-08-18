import * as React from 'react';

export class Downloads extends React.Component {
  render() {
    return (
      <>
        <h3>Downloads</h3>
        <table className='table text-black'>
          <thead>
            <tr>
              <th>Nationality </th>
              <th>Pantone Value </th>
              <th>HTML Value </th>
              <th>RGB Value # </th>
              <th>VASL RGB Value</th>
              <th>CMYK Value</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{backgroundColor: '#ABCAE9'}}>
              <td>German</td>
              <td>277C</td>
              <td>#ABCAE9</td>
              <td>171 202 233</td>
              <td>106 184 255</td>
              <td>35 9 0 0</td>
            </tr>
            <tr style={{backgroundColor: '#EFD19F'}}>
              <td>British</td>
              <td>155C</td>
              <td>#EFD19F</td>
              <td>239 209 159</td>
              <td>229 206 160</td>
              <td>0 13 33 6</td>
            </tr>
            <tr style={{backgroundColor: '#B5BD00'}}>
              <td>U.S.</td>
              <td>390C</td>
              <td>#B5BD00</td>
              <td>181 189 0</td>
              <td>102 204 0</td>
              <td>27 0 100 3</td>
            </tr>
            <tr style={{backgroundColor: '#EAAA00'}}>
              <td>Russian</td>
              <td>124C</td>
              <td>#EAAA00</td>
              <td>234 170 0</td>
              <td>145 145 0</td>
              <td>0 30 100 0</td>
            </tr>
            <tr style={{backgroundColor: '#B58500'}}>
              <td>Russian</td>
              <td>125</td>
              <td>#B58500</td>
              <td>181 133 0</td>
              <td>145 145 0</td>
              <td>6 32 100 24</td>
            </tr>
            <tr style={{backgroundColor: '#AD9844'}}>
              <td>Russian</td>
              <td>457 U</td>
              <td>#b79856</td>
              <td>183 152 86</td>
              <td>145 145 0</td>
              <td>0 17 53 28</td>
            </tr>
            <tr style={{backgroundColor: '#A7A8AA'}}>
              <td>Italian</td>
              <td>Cool Grey 6C</td>
              <td>#A7A8AA</td>
              <td>167 168 170</td>
              <td>166 173 178</td>
              <td>16 11 11 27</td>
            </tr>
            <tr style={{backgroundColor: '#A2E4B8'}}>
              <td>Allied Minor</td>
              <td>351C</td>
              <td>#A2E4B8</td>
              <td>162 228 184</td>
              <td>130 237 189</td>
              <td>29 0 19 11</td>
            </tr>
            <tr style={{backgroundColor: '#43B02A'}}>
              <td>Axis Minor</td>
              <td>361C</td>
              <td>#43B02A</td>
              <td>67 176 42</td>
              <td>29 226 86</td>
              <td>77 0 100 0</td>
            </tr>
            <tr style={{backgroundColor: '#FDDA24'}}>
              <td>Japanese</td>
              <td>115C</td>
              <td>#FDDA24</td>
              <td>253 218 36</td>
              <td>255 219 0</td>
              <td>0 6 87 0</td>
            </tr>
            <tr style={{backgroundColor: '#71C5E8'}}>
              <td>French</td>
              <td>297C</td>
              <td>#71C5E8</td>
              <td>113 197 232</td>
              <td> 0 140 255</td>
              <td>52 0 1 0</td>
            </tr>
            <tr style={{backgroundColor: '#D0D3D4'}}>
              <td>Finnish</td>
              <td>427C</td>
              <td>#D0D3D4</td>
              <td>208 211 212</td>
              <td>208 211 211</td>
              <td>7 3 5 8</td>
            </tr>
            <tr style={{backgroundColor: '#69a8d9'}}>
              <td>Swedish</td>
              <td>284C</td>
              <td>#69a8d9</td>
              <td>105 168 217</td>
              <td>105 168 217</td>
              <td>52 23 0 15</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                Reference: <a href="http://rgb.to/">rgb.to</a> Color conversion website
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
