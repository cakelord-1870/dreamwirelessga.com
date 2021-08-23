var Currency = {
  rates: {"USD":1.0,"EUR":1.17783,"GBP":1.38409,"CAD":0.795444,"ARS":0.0103064,"AUD":0.733939,"BRL":0.189972,"CLP":0.00127099,"CNY":0.154432,"CYP":0.397899,"CZK":0.0463263,"DKK":0.158387,"EEK":0.0706676,"HKD":0.128462,"HUF":0.00335038,"ISK":0.00793674,"INR":0.0134881,"JMD":0.00647065,"JPY":0.00914902,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0502595,"NZD":0.702815,"NOK":0.113289,"PLN":0.258312,"SGD":0.73763,"SKK":21.5517,"SIT":175.439,"ZAR":0.0673758,"KRW":0.000857973,"SEK":0.115602,"CHF":1.09577,"TWD":0.0359609,"UYU":0.0230718,"MYR":0.235998,"BSD":1.0,"CRC":0.00160983,"RON":0.239525,"PHP":0.0197202,"AED":0.272294,"VEB":2.45349e-15,"IDR":6.95746e-05,"TRY":0.118135,"THB":0.0299364,"TTD":0.147331,"ILS":0.30977,"SYP":0.000795,"XCD":0.370077,"COP":0.000260072,"RUB":0.0136417,"HRK":0.157139,"KZT":0.00235111,"TZS":0.000431138,"XPT":1025.32,"SAR":0.266667,"NIO":0.028492,"LAK":0.000104217,"OMR":2.60078,"AMD":0.00207815,"CDF":0.000505794,"KPW":0.00111108,"SPL":6.0,"KES":0.00914127,"ZWD":0.00276319,"KHR":0.000245385,"MVR":0.0649337,"GTQ":0.129198,"BZD":0.496512,"BYR":4.02774e-05,"LYD":0.22121,"DZD":0.00739309,"BIF":0.000504705,"GIP":1.38409,"BOB":0.145094,"XOF":0.00179558,"STD":4.79941e-05,"NGN":0.00243034,"PGK":0.284996,"ERN":0.0666667,"MWK":0.00123096,"CUP":0.041394,"GMD":0.0195531,"CVE":0.0106813,"BTN":0.0134881,"XAF":0.00179558,"UGX":0.00028258,"MAD":0.111533,"MNT":0.000350438,"LSL":0.0673758,"XAG":23.8942,"TOP":0.443999,"SHP":1.38409,"RSD":0.0100318,"HTG":0.0102857,"MGA":0.000256345,"MZN":0.0157027,"FKP":1.38409,"BWP":0.0898418,"HNL":0.0421562,"PYG":0.000144713,"JEP":1.38409,"EGP":0.0637339,"LBP":0.00066335,"ANG":0.558662,"WST":0.386882,"TVD":0.733939,"GYD":0.00479136,"GGP":1.38409,"NPR":0.00839074,"KMF":0.00239411,"IRR":2.37952e-05,"XPD":2596.2,"SRD":0.0466729,"TMM":5.72462e-05,"SZL":0.0673758,"MOP":0.12472,"BMD":1.0,"XPF":0.00987019,"ETB":0.0222098,"JOD":1.41044,"MDL":0.0561805,"MRO":0.00276903,"YER":0.00400003,"BAM":0.602213,"AWG":0.558659,"PEN":0.244909,"VEF":2.45349e-12,"SLL":9.76178e-05,"KYD":1.21949,"AOA":0.00154554,"TND":0.360047,"TJS":0.0878534,"SCR":0.0682712,"LKR":0.00501246,"DJF":0.00562537,"GNF":0.00010248,"VUV":0.00894549,"SDG":0.00225268,"IMP":1.38409,"GEL":0.32207,"FJD":0.479383,"DOP":0.017538,"XDR":1.42308,"MUR":0.0235754,"MMK":0.000607776,"LRD":0.0058258,"BBD":0.5,"ZMK":5.26287e-05,"XAU":1787.44,"VND":4.37273e-05,"UAH":0.0373802,"TMT":0.286231,"IQD":0.000685237,"BGN":0.602213,"KGS":0.0118009,"RWF":0.000994722,"BHD":2.65957,"UZS":9.40623e-05,"PKR":0.00607727,"MKD":0.019092,"AFN":0.012511,"NAD":0.0673758,"BDT":0.0118004,"AZN":0.588588,"SOS":0.00173174,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.124746,"ALL":0.00968437,"BND":0.73763,"KWD":3.32676,"GHS":0.166248,"ZMW":0.0526287,"XBT":46676.6,"NTD":0.0337206,"BYN":0.402774,"CNH":0.154412,"MRU":0.0276903,"STN":0.0479941,"VES":2.45349e-07,"MXV":0.336969},
  convert: function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
  }
};
