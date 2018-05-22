package es.upm.dit.isst.fancyFilm.dao;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class TestComentarPeli {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @Before
  public void setUp() throws Exception {
	System.setProperty( "webdriver.chrome.driver", "/home/isst/chromedriver");
	driver = new ChromeDriver();
    baseUrl = "https://www.katalon.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }

  @Test
  public void testComentarPeli() throws Exception {
    driver.get("http://localhost:3000/");
    driver.findElement(By.id("login-DropDownToggle")).click();
    driver.findElement(By.xpath("(//button[@id='login-DropDownItem'])[2]")).click();
    driver.findElement(By.id("input1")).click();
    driver.findElement(By.id("input1")).clear();
    driver.findElement(By.id("input1")).sendKeys("espectador@fancyfilm.com");
    driver.findElement(By.name("password")).click();
    driver.findElement(By.name("password")).clear();
    driver.findElement(By.name("password")).sendKeys("espec");
    driver.findElement(By.xpath("//div[@id='root']/div/div/div/div/div[2]/div[6]/div/button")).click();
    driver.findElement(By.id("IrCartelera")).click();
    driver.findElement(By.xpath("(//button[@type='button'])[6]")).click();
    driver.findElement(By.id("input1")).click();
    driver.findElement(By.id("input1")).clear();
    driver.findElement(By.id("input1")).sendKeys("1");
    driver.findElement(By.id("input1")).click();
    driver.findElement(By.id("input1")).click();
    // ERROR: Caught exception [ERROR: Unsupported command [doubleClick | id=input1 | ]]
    driver.findElement(By.id("input1")).click();
    driver.findElement(By.id("input1")).click();
    driver.findElement(By.id("input1")).click();
    // ERROR: Caught exception [ERROR: Unsupported command [doubleClick | id=input1 | ]]
    driver.findElement(By.id("input1")).click();
    driver.findElement(By.id("input1")).clear();
    driver.findElement(By.id("input1")).sendKeys("8");
    driver.findElement(By.name("cuerpo")).click();
    driver.findElement(By.name("cuerpo")).clear();
    driver.findElement(By.name("cuerpo")).sendKeys("Está super bien");
    driver.findElement(By.xpath("//div[@id='root']/div/div[2]/div/div/div/div/div[4]/div/div/button")).click();
    driver.findElement(By.xpath("(//button[@type='button'])[7]")).click();
    driver.findElement(By.xpath("//div[@id='root']/div/div[3]/div/div/div/div/div[5]/button")).click();
    assertEquals("8", driver.findElement(By.xpath("//li[@id='listGroupItem']/h2/span")).getText());
  }

  @After
  public void tearDown() throws Exception {
    driver.quit();
    String verificationErrorString = verificationErrors.toString();
    if (!"".equals(verificationErrorString)) {
      fail(verificationErrorString);
    }
  }

  private boolean isElementPresent(By by) {
    try {
      driver.findElement(by);
      return true;
    } catch (NoSuchElementException e) {
      return false;
    }
  }

  private boolean isAlertPresent() {
    try {
      driver.switchTo().alert();
      return true;
    } catch (NoAlertPresentException e) {
      return false;
    }
  }

  private String closeAlertAndGetItsText() {
    try {
      Alert alert = driver.switchTo().alert();
      String alertText = alert.getText();
      if (acceptNextAlert) {
        alert.accept();
      } else {
        alert.dismiss();
      }
      return alertText;
    } finally {
      acceptNextAlert = true;
    }
  }
}
