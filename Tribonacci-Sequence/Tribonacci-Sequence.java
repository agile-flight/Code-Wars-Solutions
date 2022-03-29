import java.util.Arrays;
import org.apache.commons.lang3.ArrayUtils;

public class Xbonacci {

  public double[] tribonacci(double[] s, int n) {
    if (n < 3){
      return Arrays.copyOfRange(s, 0, n);
    }
      
    for (int i = 0; i < n - 3; i++) {
      s = ArrayUtils.addAll(s, s[s.length - 1] + s[s.length - 2] + s[s.length - 3]);
    }
    
    return s;
  }
}
