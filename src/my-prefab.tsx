/** @jsx createElementEntity */
import { COLLISION_LAYERS, createElementEntity, EntityDef, Fit, FLOATY_OBJECT_FLAGS, getAbsoluteHref, Shape } from "hubs";
import * as THREE from "three";

import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader';

const offset = new THREE.Vector3();
const pdbLoader = new PDBLoader();

export function MyPrefab(): EntityDef {

    // const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
    // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    // new THREE.Group().children[0].geometry
    const root = new THREE.Group();
    const pdb = pdbLoader.parse(`HEADER
REMARK Spartan exported Fri Jan 30 16:05:42 1998
HETATM    1  C   UNK  0001       1.339   5.378  -4.149
HETATM    2  C   UNK  0001      -1.079   1.746  -3.946
HETATM    3  C   UNK  0001       1.441   1.816  -3.988
HETATM    4  C   UNK  0001       0.149   3.619  -2.788
HETATM    5  C   UNK  0001      -1.023  -0.984  -5.086
HETATM    6  C   UNK  0001       0.206   0.890  -3.927
HETATM    7  C   UNK  0001      -0.977  -1.816  -3.786
HETATM    8  C   UNK  0001       1.543  -1.746  -3.828
HETATM    9  C   UNK  0001       0.251   0.057  -2.628
HETATM   10  C   UNK  0001      -0.921  -4.546  -4.925
HETATM   11  C   UNK  0001       0.308  -2.672  -3.766
HETATM   12  C   UNK  0001      -0.876  -5.378  -3.626
HETATM   13  C   UNK  0001       0.353  -3.505  -2.468
HETATM   14  C   UNK  0001      -1.143   5.422  -1.587
HETATM   15  C   UNK  0001      -3.607   2.623  -2.684
HETATM   16  C   UNK  0001      -1.085   2.693  -2.726
HETATM   17  C   UNK  0001      -2.378   4.496  -1.526
HETATM   18  C   UNK  0001      -3.562   1.790  -1.385
HETATM   19  C   UNK  0001      -1.041   1.860  -1.427
HETATM   20  C   UNK  0001      -2.333   3.663  -0.227
HETATM   21  C   UNK  0001      -2.372   3.548  -2.746
HETATM   22  C   UNK  0001      -2.315   0.820  -3.885
HETATM   23  C   UNK  0001      -3.505  -0.939  -2.524
HETATM   24  C   UNK  0001      -0.984  -0.869  -2.566
HETATM   25  C   UNK  0001      -2.276   0.934  -1.365
HETATM   26  C   UNK  0001      -3.460  -1.772  -1.225
HETATM   27  C   UNK  0001      -0.939  -1.702  -1.267
HETATM   28  C   UNK  0001      -2.231   0.101  -0.067
HETATM   29  C   UNK  0001      -2.270  -0.014  -2.585
HETATM   30  C   UNK  0001      -2.213  -2.742  -3.725
HETATM   31  C   UNK  0001      -3.403  -4.501  -2.364
HETATM   32  C   UNK  0001      -0.882  -4.431  -2.406
HETATM   33  C   UNK  0001      -2.174  -2.628  -1.205
HETATM   34  C   UNK  0001      -3.358  -5.334  -1.065
HETATM   35  C   UNK  0001      -0.838  -5.264  -1.107
HETATM   36  C   UNK  0001      -2.129  -3.461   0.094
HETATM   37  C   UNK  0001      -2.168  -3.575  -2.425
HETATM   38  C   UNK  0001      -3.625   5.466   0.974
HETATM   39  C   UNK  0001      -6.089   2.667  -0.123
HETATM   40  C   UNK  0001      -3.568   2.737  -0.165
HETATM   41  C   UNK  0001      -4.860   4.541   1.036
HETATM   42  C   UNK  0001      -6.044   1.834   1.176
HETATM   43  C   UNK  0001      -3.524   1.904   1.134
HETATM   44  C   UNK  0001      -4.815   3.707   2.334
HETATM   45  C   UNK  0001      -4.854   3.593  -0.184
HETATM   46  C   UNK  0001      -4.797   0.864  -1.324
HETATM   47  C   UNK  0001      -5.987  -0.895   0.037
HETATM   48  C   UNK  0001      -3.466  -0.825  -0.005
HETATM   49  C   UNK  0001      -4.758   0.979   1.196
HETATM   50  C   UNK  0001      -5.942  -1.728   1.336
HETATM   51  C   UNK  0001      -3.422  -1.657   1.294
HETATM   52  C   UNK  0001      -4.713   0.145   2.495
HETATM   53  C   UNK  0001      -4.752   0.031  -0.024
HETATM   54  C   UNK  0001      -4.695  -2.698  -1.164
HETATM   55  C   UNK  0001      -3.364  -4.387   0.155
HETATM   56  C   UNK  0001      -4.656  -2.583   1.356
HETATM   57  C   UNK  0001      -3.320  -5.219   1.455
HETATM   58  C   UNK  0001      -4.612  -3.417   2.655
HETATM   59  C   UNK  0001      -4.650  -3.531   0.136
HETATM   60  C   UNK  0001      -6.050   2.781   2.396
HETATM   61  C   UNK  0001      -6.006   1.949   3.695
HETATM   62  C   UNK  0001      -5.948  -0.781   2.556
HETATM   63  C   UNK  0001      -5.904  -1.613   3.856
HETATM   64  C   UNK  0001       1.379   5.492  -1.629
HETATM   65  C   UNK  0001       3.899   5.562  -1.671
HETATM   66  C   UNK  0001       2.625   4.522  -4.129
HETATM   67  C   UNK  0001       1.435   2.763  -2.768
HETATM   68  C   UNK  0001       3.956   2.833  -2.810
HETATM   69  C   UNK  0001       2.664   4.637  -1.609
HETATM   70  C   UNK  0001       1.480   1.930  -1.469
HETATM   71  C   UNK  0001       4.001   2.001  -1.511
HETATM   72  C   UNK  0001       2.709   3.803  -0.311
HETATM   73  C   UNK  0001       2.670   3.689  -2.829
HETATM   74  C   UNK  0001       2.727   0.960  -3.969
HETATM   75  C   UNK  0001       1.537  -0.799  -2.608
HETATM   76  C   UNK  0001       4.058  -0.729  -2.650
HETATM   77  C   UNK  0001       2.766   1.075  -1.449
HETATM   78  C   UNK  0001       1.582  -1.632  -1.309
HETATM   79  C   UNK  0001       4.102  -1.561  -1.351
HETATM   80  C   UNK  0001       2.811   0.241  -0.150
HETATM   81  C   UNK  0001       2.772   0.127  -2.669
HETATM   82  C   UNK  0001       2.829  -2.602  -3.809
HETATM   83  C   UNK  0001       1.638  -4.361  -2.448
HETATM   84  C   UNK  0001       2.868  -2.487  -1.289
HETATM   85  C   UNK  0001       1.684  -5.193  -1.149
HETATM   86  C   UNK  0001       2.913  -3.321   0.010
HETATM   87  C   UNK  0001       2.874  -3.435  -2.509
HETATM   88  C   UNK  0001      -1.104   5.537   0.932
HETATM   89  C   UNK  0001       1.417   5.607   0.890
HETATM   90  C   UNK  0001       0.143   4.566  -1.568
HETATM   91  C   UNK  0001      -1.047   2.807  -0.207
HETATM   92  C   UNK  0001       1.474   2.877  -0.249
HETATM   93  C   UNK  0001       0.182   4.681   0.952
HETATM   94  C   UNK  0001      -1.002   1.975   1.092
HETATM   95  C   UNK  0001       1.518   2.045   1.050
HETATM   96  C   UNK  0001       0.227   3.847   2.251
HETATM   97  C   UNK  0001       0.188   3.733  -0.268
HETATM   98  C   UNK  0001       0.245   1.005  -1.408
HETATM   99  C   UNK  0001      -0.946  -0.755  -0.047
HETATM  100  C   UNK  0001       1.576  -0.685  -0.089
HETATM  101  C   UNK  0001       0.284   1.119   1.112
HETATM  102  C   UNK  0001      -0.900  -1.587   1.253
HETATM  103  C   UNK  0001       1.620  -1.517   1.211
HETATM  104  C   UNK  0001       0.328   0.285   2.411
HETATM  105  C   UNK  0001       0.290   0.171  -0.108
HETATM  106  C   UNK  0001       0.347  -2.557  -1.248
HETATM  107  C   UNK  0001      -0.844  -4.317   0.113
HETATM  108  C   UNK  0001       1.678  -4.247   0.071
HETATM  109  C   UNK  0001       0.386  -2.443   1.272
HETATM  110  C   UNK  0001      -0.798  -5.149   1.413
HETATM  111  C   UNK  0001       1.722  -5.079   1.371
HETATM  112  C   UNK  0001       0.430  -3.276   2.571
HETATM  113  C   UNK  0001       0.392  -3.391   0.052
HETATM  114  C   UNK  0001      -3.586   5.581   3.493
HETATM  115  C   UNK  0001      -1.066   5.651   3.451
HETATM  116  C   UNK  0001      -2.339   4.611   0.993
HETATM  117  C   UNK  0001      -3.530   2.851   2.354
HETATM  118  C   UNK  0001      -1.008   2.922   2.312
HETATM  119  C   UNK  0001      -2.300   4.725   3.513
HETATM  120  C   UNK  0001      -3.484   2.019   3.654
HETATM  121  C   UNK  0001      -0.964   2.089   3.612
HETATM  122  C   UNK  0001      -2.256   3.892   4.812
HETATM  123  C   UNK  0001      -2.294   3.777   2.293
HETATM  124  C   UNK  0001      -2.237   1.049   1.153
HETATM  125  C   UNK  0001      -3.428  -0.710   2.514
HETATM  126  C   UNK  0001      -0.906  -0.640   2.473
HETATM  127  C   UNK  0001      -2.199   1.163   3.673
HETATM  128  C   UNK  0001      -3.382  -1.543   3.814
HETATM  129  C   UNK  0001      -0.862  -1.473   3.772
HETATM  130  C   UNK  0001      -2.154   0.330   4.972
HETATM  131  C   UNK  0001      -2.192   0.215   2.453
HETATM  132  C   UNK  0001      -2.135  -2.513   1.314
HETATM  133  C   UNK  0001      -3.326  -4.272   2.675
HETATM  134  C   UNK  0001      -0.804  -4.202   2.633
HETATM  135  C   UNK  0001      -2.097  -2.399   3.834
HETATM  136  C   UNK  0001      -3.280  -5.105   3.974
HETATM  137  C   UNK  0001      -0.760  -5.035   3.932
HETATM  138  C   UNK  0001      -2.052  -3.232   5.132
HETATM  139  C   UNK  0001      -2.091  -3.347   2.614
HETATM  140  C   UNK  0001      -3.548   5.695   6.013
HETATM  141  C   UNK  0001      -4.821   4.655   3.554
HETATM  142  C   UNK  0001      -6.012   2.896   4.915
HETATM  143  C   UNK  0001      -3.490   2.966   4.874
HETATM  144  C   UNK  0001      -4.783   4.770   6.074
HETATM  145  C   UNK  0001      -5.966   2.063   6.215
HETATM  146  C   UNK  0001      -3.446   2.133   6.173
HETATM  147  C   UNK  0001      -4.738   3.936   7.373
HETATM  148  C   UNK  0001      -4.776   3.822   4.854
HETATM  149  C   UNK  0001      -4.719   1.093   3.715
HETATM  150  C   UNK  0001      -5.910  -0.666   5.076
HETATM  151  C   UNK  0001      -3.388  -0.596   5.034
HETATM  152  C   UNK  0001      -4.681   1.208   6.235
HETATM  153  C   UNK  0001      -5.864  -1.499   6.375
HETATM  154  C   UNK  0001      -3.344  -1.429   6.333
HETATM  155  C   UNK  0001      -4.636   0.374   7.533
HETATM  156  C   UNK  0001      -4.675   0.260   5.015
HETATM  157  C   UNK  0001      -4.618  -2.469   3.875
HETATM  158  C   UNK  0001      -3.287  -4.158   5.194
HETATM  159  C   UNK  0001      -4.579  -2.354   6.395
HETATM  160  C   UNK  0001      -3.242  -4.991   6.493
HETATM  161  C   UNK  0001      -4.534  -3.188   7.694
HETATM  162  C   UNK  0001      -4.573  -3.302   5.175
HETATM  163  C   UNK  0001       3.938   5.677   0.848
HETATM  164  C   UNK  0001       5.185   4.707  -1.652
HETATM  165  C   UNK  0001       3.994   2.948  -0.291
HETATM  166  C   UNK  0001       6.516   3.018  -0.333
HETATM  167  C   UNK  0001       5.224   4.821   0.868
HETATM  168  C   UNK  0001       4.040   2.115   1.008
HETATM  169  C   UNK  0001       6.560   2.185   0.967
HETATM  170  C   UNK  0001       5.269   3.988   2.167
HETATM  171  C   UNK  0001       5.230   3.873  -0.352
HETATM  172  C   UNK  0001       5.287   1.145  -1.492
HETATM  173  C   UNK  0001       4.096  -0.614  -0.131
HETATM  174  C   UNK  0001       6.618  -0.544  -0.173
HETATM  175  C   UNK  0001       5.326   1.259   1.028
HETATM  176  C   UNK  0001       4.142  -1.447   1.169
HETATM  177  C   UNK  0001       6.662  -1.377   1.127
HETATM  178  C   UNK  0001       5.370   0.426   2.327
HETATM  179  C   UNK  0001       5.332   0.311  -0.192
HETATM  180  C   UNK  0001       5.389  -2.417  -1.332
HETATM  181  C   UNK  0001       4.198  -4.176   0.030
HETATM  182  C   UNK  0001       5.427  -2.303   1.188
HETATM  183  C   UNK  0001       4.244  -5.009   1.329
HETATM  184  C   UNK  0001       5.472  -3.136   2.487
HETATM  185  C   UNK  0001       5.433  -3.251  -0.031
HETATM  186  C   UNK  0001       1.456   5.721   3.409
HETATM  187  C   UNK  0001       3.976   5.791   3.368
HETATM  188  C   UNK  0001       2.703   4.751   0.909
HETATM  189  C   UNK  0001       1.512   2.992   2.270
HETATM  190  C   UNK  0001       4.034   3.062   2.228
HETATM  191  C   UNK  0001       2.742   4.866   3.429
HETATM  192  C   UNK  0001       1.558   2.159   3.570
HETATM  193  C   UNK  0001       4.078   2.229   3.528
HETATM  194  C   UNK  0001       2.786   4.032   4.728
HETATM  195  C   UNK  0001       2.748   3.918   2.209
HETATM  196  C   UNK  0001       2.805   1.189   1.069
HETATM  197  C   UNK  0001       1.614  -0.570   2.431
HETATM  198  C   UNK  0001       4.136  -0.500   2.389
HETATM  199  C   UNK  0001       2.843   1.304   3.590
HETATM  200  C   UNK  0001       1.660  -1.403   3.730
HETATM  201  C   UNK  0001       4.180  -1.333   3.688
HETATM  202  C   UNK  0001       2.888   0.470   4.888
HETATM  203  C   UNK  0001       2.849   0.356   2.370
HETATM  204  C   UNK  0001       2.906  -2.373   1.230
HETATM  205  C   UNK  0001       1.716  -4.132   2.591
HETATM  206  C   UNK  0001       4.238  -4.062   2.549
HETATM  207  C   UNK  0001       2.945  -2.258   3.750
HETATM  208  C   UNK  0001       1.761  -4.965   3.890
HETATM  209  C   UNK  0001       4.282  -4.894   3.848
HETATM  210  C   UNK  0001       2.990  -3.092   5.048
HETATM  211  C   UNK  0001       2.951  -3.206   2.530
HETATM  212  C   UNK  0001      -1.026   5.765   5.971
HETATM  213  C   UNK  0001       1.494   5.836   5.929
HETATM  214  C   UNK  0001       0.221   4.795   3.470
HETATM  215  C   UNK  0001      -0.970   3.036   4.832
HETATM  216  C   UNK  0001       1.552   3.106   4.790
HETATM  217  C   UNK  0001       0.259   4.910   5.991
HETATM  218  C   UNK  0001      -0.924   2.204   6.131
HETATM  219  C   UNK  0001       1.596   2.274   6.089
HETATM  220  C   UNK  0001       0.304   4.076   7.289
HETATM  221  C   UNK  0001       0.265   3.962   4.771
HETATM  222  C   UNK  0001       0.322   1.233   3.631
HETATM  223  C   UNK  0001      -0.868  -0.526   4.992
HETATM  224  C   UNK  0001       1.653  -0.456   4.950
HETATM  225  C   UNK  0001       0.361   1.348   6.151
HETATM  226  C   UNK  0001      -0.823  -1.358   6.291
HETATM  227  C   UNK  0001       1.698  -1.288   6.249
HETATM  228  C   UNK  0001       0.406   0.514   7.449
HETATM  229  C   UNK  0001       0.367   0.400   4.931
HETATM  230  C   UNK  0001       0.424  -2.328   3.791
HETATM  231  C   UNK  0001      -0.766  -4.088   5.152
HETATM  232  C   UNK  0001       1.755  -4.018   5.110
HETATM  233  C   UNK  0001       0.463  -2.214   6.311
HETATM  234  C   UNK  0001      -0.721  -4.920   6.451
HETATM  235  C   UNK  0001       1.799  -4.850   6.410
HETATM  236  C   UNK  0001       0.508  -3.048   7.610
HETATM  237  C   UNK  0001       0.469  -3.162   5.091
HETATM  238  C   UNK  0001      -0.988   5.880   8.490
HETATM  239  C   UNK  0001      -2.262   4.840   6.032
HETATM  240  C   UNK  0001      -3.452   3.080   7.393
HETATM  241  C   UNK  0001      -0.931   3.151   7.351
HETATM  242  C   UNK  0001      -2.223   4.954   8.552
HETATM  243  C   UNK  0001      -3.407   2.248   8.692
HETATM  244  C   UNK  0001      -0.886   2.318   8.650
HETATM  245  C   UNK  0001      -2.178   4.121   9.851
HETATM  246  C   UNK  0001      -2.217   4.006   7.332
HETATM  247  C   UNK  0001      -2.160   1.278   6.192
HETATM  248  C   UNK  0001      -3.350  -0.482   7.553
HETATM  249  C   UNK  0001      -0.829  -0.411   7.511
HETATM  250  C   UNK  0001      -2.121   1.392   8.712
HETATM  251  C   UNK  0001      -3.305  -1.314   8.852
HETATM  252  C   UNK  0001      -0.785  -1.244   8.811
HETATM  253  C   UNK  0001      -2.076   0.559  10.011
HETATM  254  C   UNK  0001      -2.115   0.444   7.492
HETATM  255  C   UNK  0001      -2.058  -2.284   6.352
HETATM  256  C   UNK  0001      -3.249  -4.044   7.713
HETATM  257  C   UNK  0001      -0.727  -3.973   7.671
HETATM  258  C   UNK  0001      -2.019  -2.170   8.872
HETATM  259  C   UNK  0001      -3.203  -4.876   9.013
HETATM  260  C   UNK  0001      -0.683  -4.806   8.971
HETATM  261  C   UNK  0001      -1.974  -3.003  10.171
HETATM  262  C   UNK  0001      -2.013  -3.118   7.652
HETATM  263  C   UNK  0001       6.554   3.132   2.187
HETATM  264  C   UNK  0001       6.600   2.300   3.486
HETATM  265  C   UNK  0001       6.656  -0.430   2.347
HETATM  266  C   UNK  0001       6.701  -1.262   3.646
HETATM  267  C   UNK  0001       4.016   5.906   5.887
HETATM  268  C   UNK  0001       5.262   4.936   3.387
HETATM  269  C   UNK  0001       4.072   3.176   4.748
HETATM  270  C   UNK  0001       6.594   3.247   4.706
HETATM  271  C   UNK  0001       5.301   5.050   5.907
HETATM  272  C   UNK  0001       4.117   2.344   6.047
HETATM  273  C   UNK  0001       6.638   2.414   6.005
HETATM  274  C   UNK  0001       5.346   4.217   7.205
HETATM  275  C   UNK  0001       5.307   4.102   4.687
HETATM  276  C   UNK  0001       5.364   1.374   3.547
HETATM  277  C   UNK  0001       4.174  -0.386   4.908
HETATM  278  C   UNK  0001       6.695  -0.315   4.866
HETATM  279  C   UNK  0001       5.403   1.488   6.067
HETATM  280  C   UNK  0001       4.219  -1.218   6.207
HETATM  281  C   UNK  0001       6.739  -1.148   6.165
HETATM  282  C   UNK  0001       5.448   0.655   7.366
HETATM  283  C   UNK  0001       5.409   0.540   4.847
HETATM  284  C   UNK  0001       5.466  -2.188   3.707
HETATM  285  C   UNK  0001       4.276  -3.947   5.068
HETATM  286  C   UNK  0001       5.505  -2.074   6.227
HETATM  287  C   UNK  0001       4.321  -4.780   6.368
HETATM  288  C   UNK  0001       5.550  -2.907   7.526
HETATM  289  C   UNK  0001       5.511  -3.022   5.007
HETATM  290  C   UNK  0001       1.533   5.950   8.448
HETATM  291  C   UNK  0001       2.780   4.980   5.948
HETATM  292  C   UNK  0001       1.590   3.221   7.309
HETATM  293  C   UNK  0001       4.111   3.291   7.267
HETATM  294  C   UNK  0001       2.819   5.094   8.468
HETATM  295  C   UNK  0001       1.635   2.388   8.608
HETATM  296  C   UNK  0001       4.155   2.458   8.566
HETATM  297  C   UNK  0001       2.864   4.261   9.767
HETATM  298  C   UNK  0001       2.825   4.146   7.248
HETATM  299  C   UNK  0001       2.882   1.418   6.108
HETATM  300  C   UNK  0001       1.691  -0.341   7.469
HETATM  301  C   UNK  0001       4.213  -0.271   7.427
HETATM  302  C   UNK  0001       2.921   1.533   8.628
HETATM  303  C   UNK  0001       1.737  -1.174   8.769
HETATM  304  C   UNK  0001       4.257  -1.104   8.727
HETATM  305  C   UNK  0001       2.966   0.699   9.927
HETATM  306  C   UNK  0001       2.927   0.585   7.408
HETATM  307  C   UNK  0001       2.984  -2.144   6.268
HETATM  308  C   UNK  0001       1.793  -3.903   7.630
HETATM  309  C   UNK  0001       4.315  -3.833   7.588
HETATM  310  C   UNK  0001       3.023  -2.029   8.788
HETATM  311  C   UNK  0001       1.839  -4.736   8.929
HETATM  312  C   UNK  0001       3.067  -2.863  10.087
HETATM  313  C   UNK  0001       3.029  -2.977   7.568
HETATM  314  C   UNK  0001       0.298   5.024   8.509
HETATM  315  C   UNK  0001      -0.893   3.265   9.870
HETATM  316  C   UNK  0001       1.629   3.335   9.828
HETATM  317  C   UNK  0001      -0.847   2.432  11.170
HETATM  318  C   UNK  0001       1.673   2.503  11.128
HETATM  319  C   UNK  0001       0.343   4.191   9.809
HETATM  320  C   UNK  0001       0.400   1.462   8.669
HETATM  321  C   UNK  0001      -0.791  -0.297  10.031
HETATM  322  C   UNK  0001       1.731  -0.227   9.989
HETATM  323  C   UNK  0001       0.439   1.577  11.189
HETATM  324  C   UNK  0001      -0.745  -1.130  11.330
HETATM  325  C   UNK  0001       1.775  -1.059  11.288
HETATM  326  C   UNK  0001       0.445   0.629   9.970
HETATM  327  C   UNK  0001       0.502  -2.100   8.830
HETATM  328  C   UNK  0001      -0.689  -3.859  10.191
HETATM  329  C   UNK  0001       1.833  -3.789  10.149
HETATM  330  C   UNK  0001       0.540  -1.985  11.350
HETATM  331  C   UNK  0001       0.546  -2.933  10.130
CONECT    1   66
CONECT    2    6   16   22
CONECT    3    6   67   74
CONECT    4   16   67   90
CONECT    5    7
CONECT    6    2    3    9
CONECT    7    5   11   24   30
CONECT    8   11   75   82
CONECT    9    6   24   75   98
CONECT   10   12
CONECT   11    7    8   13
CONECT   12   10   32
CONECT   13   11   32   83  106
CONECT   14   17   90
CONECT   15   18   21
CONECT   16    2    4   19   21
CONECT   17   14   20   21
CONECT   18   15   25   40   46
CONECT   19   16   25   91   98
CONECT   20   17   40   91  116
CONECT   21   15   16   17
CONECT   22    2   29
CONECT   23   26   29
CONECT   24    7    9   27   29
CONECT   25   18   19   28   29
CONECT   26   23   33   48   54
CONECT   27   24   33   99  106
CONECT   28   25   48   99  124
CONECT   29   22   23   24   25
CONECT   30    7   37
CONECT   31   34   37
CONECT   32   12   13   35   37
CONECT   33   26   27   36   37
CONECT   34   31   55
CONECT   35   32  107
CONECT   36   33   55  107  132
CONECT   37   30   31   32   33
CONECT   38   41  116
CONECT   39   42   45
CONECT   40   18   20   43   45
CONECT   41   38   44   45
CONECT   42   39   49   60
CONECT   43   40   49  117  124
CONECT   44   41   60  117  141
CONECT   45   39   40   41
CONECT   46   18   53
CONECT   47   50   53
CONECT   48   26   28   51   53
CONECT   49   42   43   52   53
CONECT   50   47   56   62
CONECT   51   48   56  125  132
CONECT   52   49   62  125  149
CONECT   53   46   47   48   49
CONECT   54   26   59
CONECT   55   34   36   57   59
CONECT   56   50   51   58   59
CONECT   57   55  133
CONECT   58   56  133  157
CONECT   59   54   55   56
CONECT   60   42   44   61
CONECT   61   60  142  149
CONECT   62   50   52   63
CONECT   63   62  150  157
CONECT   64   69   90
CONECT   65   69  164
CONECT   66    1   73
CONECT   67    3    4   70   73
CONECT   68   71   73
CONECT   69   64   65   72   73
CONECT   70   67   77   92   98
CONECT   71   68   77  165  172
CONECT   72   69   92  165  188
CONECT   73   66   67   68   69
CONECT   74    3   81
CONECT   75    8    9   78   81
CONECT   76   79   81
CONECT   77   70   71   80   81
CONECT   78   75   84  100  106
CONECT   79   76   84  173  180
CONECT   80   77  100  173  196
CONECT   81   74   75   76   77
CONECT   82    8   87
CONECT   83   13   85   87
CONECT   84   78   79   86   87
CONECT   85   83  108
CONECT   86   84  108  181  204
CONECT   87   82   83   84
CONECT   88   93  116
CONECT   89   93  188
CONECT   90    4   14   64   97
CONECT   91   19   20   94   97
CONECT   92   70   72   95   97
CONECT   93   88   89   96   97
CONECT   94   91  101  118  124
CONECT   95   92  101  189  196
CONECT   96   93  118  189  214
CONECT   97   90   91   92   93
CONECT   98    9   19   70  105
CONECT   99   27   28  102  105
CONECT  100   78   80  103  105
CONECT  101   94   95  104  105
CONECT  102   99  109  126  132
CONECT  103  100  109  197  204
CONECT  104  101  126  197  222
CONECT  105   98   99  100  101
CONECT  106   13   27   78  113
CONECT  107   35   36  110  113
CONECT  108   85   86  111  113
CONECT  109  102  103  112  113
CONECT  110  107  134
CONECT  111  108  205
CONECT  112  109  134  205  230
CONECT  113  106  107  108  109
CONECT  114  119  141
CONECT  115  119  214
CONECT  116   20   38   88  123
CONECT  117   43   44  120  123
CONECT  118   94   96  121  123
CONECT  119  114  115  122  123
CONECT  120  117  127  143  149
CONECT  121  118  127  215  222
CONECT  122  119  143  215  239
CONECT  123  116  117  118  119
CONECT  124   28   43   94  131
CONECT  125   51   52  128  131
CONECT  126  102  104  129  131
CONECT  127  120  121  130  131
CONECT  128  125  135  151  157
CONECT  129  126  135  223  230
CONECT  130  127  151  223  247
CONECT  131  124  125  126  127
CONECT  132   36   51  102  139
CONECT  133   57   58  136  139
CONECT  134  110  112  137  139
CONECT  135  128  129  138  139
CONECT  136  133  158
CONECT  137  134  231
CONECT  138  135  158  231  255
CONECT  139  132  133  134  135
CONECT  140  144  239
CONECT  141   44  114  148
CONECT  142   61  145  148
CONECT  143  120  122  146  148
CONECT  144  140  147  148
CONECT  145  142  152
CONECT  146  143  152  240  247
CONECT  147  144  240
CONECT  148  141  142  143  144
CONECT  149   52   61  120  156
CONECT  150   63  153  156
CONECT  151  128  130  154  156
CONECT  152  145  146  155  156
CONECT  153  150  159
CONECT  154  151  159  248  255
CONECT  155  152  248
CONECT  156  149  150  151  152
CONECT  157   58   63  128  162
CONECT  158  136  138  160  162
CONECT  159  153  154  161  162
CONECT  160  158  256
CONECT  161  159  256
CONECT  162  157  158  159
CONECT  163  167  188
CONECT  164   65  171
CONECT  165   71   72  168  171
CONECT  166  169  171
CONECT  167  163  170  171
CONECT  168  165  175  190  196
CONECT  169  166  175  263
CONECT  170  167  190  263  268
CONECT  171  164  165  166  167
CONECT  172   71  179
CONECT  173   79   80  176  179
CONECT  174  177  179
CONECT  175  168  169  178  179
CONECT  176  173  182  198  204
CONECT  177  174  182  265
CONECT  178  175  198  265  276
CONECT  179  172  173  174  175
CONECT  180   79  185
CONECT  181   86  183  185
CONECT  182  176  177  184  185
CONECT  183  181  206
CONECT  184  182  206  284
CONECT  185  180  181  182
CONECT  186  191  214
CONECT  187  191  268
CONECT  188   72   89  163  195
CONECT  189   95   96  192  195
CONECT  190  168  170  193  195
CONECT  191  186  187  194  195
CONECT  192  189  199  216  222
CONECT  193  190  199  269  276
CONECT  194  191  216  269  291
CONECT  195  188  189  190  191
CONECT  196   80   95  168  203
CONECT  197  103  104  200  203
CONECT  198  176  178  201  203
CONECT  199  192  193  202  203
CONECT  200  197  207  224  230
CONECT  201  198  207  277  284
CONECT  202  199  224  277  299
CONECT  203  196  197  198  199
CONECT  204   86  103  176  211
CONECT  205  111  112  208  211
CONECT  206  183  184  209  211
CONECT  207  200  201  210  211
CONECT  208  205  232
CONECT  209  206  285
CONECT  210  207  232  285  307
CONECT  211  204  205  206  207
CONECT  212  217  239
CONECT  213  217  291
CONECT  214   96  115  186  221
CONECT  215  121  122  218  221
CONECT  216  192  194  219  221
CONECT  217  212  213  220  221
CONECT  218  215  225  241  247
CONECT  219  216  225  292  299
CONECT  220  217  241  292  314
CONECT  221  214  215  216  217
CONECT  222  104  121  192  229
CONECT  223  129  130  226  229
CONECT  224  200  202  227  229
CONECT  225  218  219  228  229
CONECT  226  223  233  249  255
CONECT  227  224  233  300  307
CONECT  228  225  249  300  320
CONECT  229  222  223  224  225
CONECT  230  112  129  200  237
CONECT  231  137  138  234  237
CONECT  232  208  210  235  237
CONECT  233  226  227  236  237
CONECT  234  231  257
CONECT  235  232  308
CONECT  236  233  257  308  327
CONECT  237  230  231  232  233
CONECT  238  242  314
CONECT  239  122  140  212  246
CONECT  240  146  147  243  246
CONECT  241  218  220  244  246
CONECT  242  238  245  246
CONECT  243  240  250
CONECT  244  241  250  315  320
CONECT  245  242  315
CONECT  246  239  240  241  242
CONECT  247  130  146  218  254
CONECT  248  154  155  251  254
CONECT  249  226  228  252  254
CONECT  250  243  244  253  254
CONECT  251  248  258
CONECT  252  249  258  321  327
CONECT  253  250  321
CONECT  254  247  248  249  250
CONECT  255  138  154  226  262
CONECT  256  160  161  259  262
CONECT  257  234  236  260  262
CONECT  258  251  252  261  262
CONECT  259  256
CONECT  260  257  328
CONECT  261  258  328
CONECT  262  255  256  257  258
CONECT  263  169  170  264
CONECT  264  263  270  276
CONECT  265  177  178  266
CONECT  266  265  278  284
CONECT  267  271  291
CONECT  268  170  187  275
CONECT  269  193  194  272  275
CONECT  270  264  273  275
CONECT  271  267  274  275
CONECT  272  269  279  293  299
CONECT  273  270  279
CONECT  274  271  293
CONECT  275  268  269  270  271
CONECT  276  178  193  264  283
CONECT  277  201  202  280  283
CONECT  278  266  281  283
CONECT  279  272  273  282  283
CONECT  280  277  286  301  307
CONECT  281  278  286
CONECT  282  279  301
CONECT  283  276  277  278  279
CONECT  284  184  201  266  289
CONECT  285  209  210  287  289
CONECT  286  280  281  288  289
CONECT  287  285  309
CONECT  288  286  309
CONECT  289  284  285  286
CONECT  290  294  314
CONECT  291  194  213  267  298
CONECT  292  219  220  295  298
CONECT  293  272  274  296  298
CONECT  294  290  297  298
CONECT  295  292  302  316  320
CONECT  296  293  302
CONECT  297  294  316
CONECT  298  291  292  293  294
CONECT  299  202  219  272  306
CONECT  300  227  228  303  306
CONECT  301  280  282  304  306
CONECT  302  295  296  305  306
CONECT  303  300  310  322  327
CONECT  304  301  310
CONECT  305  302  322
CONECT  306  299  300  301  302
CONECT  307  210  227  280  313
CONECT  308  235  236  311  313
CONECT  309  287  288  313
CONECT  310  303  304  312  313
CONECT  311  308  329
CONECT  312  310  329
CONECT  313  307  308  309  310
CONECT  314  220  238  290  319
CONECT  315  244  245  317  319
CONECT  316  295  297  318  319
CONECT  317  315  323
CONECT  318  316  323
CONECT  319  314  315  316
CONECT  320  228  244  295  326
CONECT  321  252  253  324  326
CONECT  322  303  305  325  326
CONECT  323  317  318  326
CONECT  324  321  330
CONECT  325  322  330
CONECT  326  320  321  322  323
CONECT  327  236  252  303  331
CONECT  328  260  261  331
CONECT  329  311  312  331
CONECT  330  324  325  331
CONECT  331  327  328  329  330
END`);

          const geometryAtoms = pdb.geometryAtoms;
					const geometryBonds = pdb.geometryBonds;
					const json = pdb.json;

					const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
					const sphereGeometry = new THREE.IcosahedronGeometry( 1, 3 );

					geometryAtoms.computeBoundingBox();
					geometryAtoms.boundingBox?.getCenter( offset ).negate();

					geometryAtoms.translate( offset.x, offset.y, offset.z );
					geometryBonds.translate( offset.x, offset.y, offset.z );

					let positions = geometryAtoms.getAttribute( 'position' );
					const colors = geometryAtoms.getAttribute( 'color' );

					const position = new THREE.Vector3();
					const color = new THREE.Color();

					for ( let i = 0; i < positions.count; i ++ ) {

						position.x = positions.getX( i );
						position.y = positions.getY( i );
						position.z = positions.getZ( i );

						color.r = colors.getX( i );
						color.g = colors.getY( i );
						color.b = colors.getZ( i );

						const material = new THREE.MeshBasicMaterial( { color: color } );

						const object = new THREE.Mesh( sphereGeometry, material );
						object.position.copy( position );
						object.position.multiplyScalar( 15 );
						object.scale.multiplyScalar( 5 );
						root.add( object );

						const atom = json.atoms[ i ];

						// const text = document.createElement( 'div' );
						// text.className = 'label';
						// text.style.color = 'rgb(' + atom[ 3 ][ 0 ] + ',' + atom[ 3 ][ 1 ] + ',' + atom[ 3 ][ 2 ] + ')';
						// text.textContent = atom[ 4 ];

						// const label = new CSS2DObject( text );
						// label.position.copy( object.position );
						// root.add( label );

					}

					positions = geometryBonds.getAttribute( 'position' );

					const start = new THREE.Vector3();
					const end = new THREE.Vector3();

					for ( let i = 0; i < positions.count; i += 2 ) {

						start.x = positions.getX( i );
						start.y = positions.getY( i );
						start.z = positions.getZ( i );

						end.x = positions.getX( i + 1 );
						end.y = positions.getY( i + 1 );
						end.z = positions.getZ( i + 1 );

						start.multiplyScalar( 15 );
						end.multiplyScalar( 15 );

						const object = new THREE.Mesh( boxGeometry, new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
						object.position.copy( start );
						object.position.lerp( end, 0.5 );
						object.scale.set( 1, 1, start.distanceTo( end ) );
						object.lookAt( end );
						root.add( object );

					}

        
    return (
        <entity 
            name="MyPrefab"
            networked
            networkedTransform
            object3D={/*new THREE.Mesh( geometry, material )*/root } 
            holdable
            floatyObject={{
              flags: FLOATY_OBJECT_FLAGS.HELIUM_WHEN_LARGE
            }}
            rigidbody={{
              collisionGroup: COLLISION_LAYERS.INTERACTABLES,
              collisionMask:
                COLLISION_LAYERS.HANDS |
                COLLISION_LAYERS.ENVIRONMENT |
                COLLISION_LAYERS.INTERACTABLES |
                COLLISION_LAYERS.AVATAR
            }}
            physicsShape={{
              fit: Fit.MANUAL,
              type: Shape.CYLINDER,
              halfExtents: [0.25, 0.5, 0.45]
            }}
            scale={[1, 1, 1]}
            inspectable
            deletable
            hoverableVisuals
        />
    )
};
