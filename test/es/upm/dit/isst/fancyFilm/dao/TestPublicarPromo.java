package es.upm.dit.isst.fancyFilm.dao;

import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import org.junit.*;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class TestPublicarPromo {
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
  public void testPublicarPromo() throws Exception {
    driver.get("http://localhost:3000/");
    driver.findElement(By.id("login-DropDownToggle")).click();
    driver.findElement(By.id("login-DropDownItem")).click();
    driver.findElement(By.id("input1")).click();
    driver.findElement(By.id("input1")).clear();
    driver.findElement(By.id("input1")).sendKeys("principepiocine@gmail.com");
    driver.findElement(By.name("password")).click();
    driver.findElement(By.name("password")).clear();
    driver.findElement(By.name("password")).sendKeys("supercine");
    driver.findElement(By.xpath("//div[@id='root']/div/div/div/div/div[2]/div[6]/div/button")).click();
    driver.findElement(By.id("IrPromo")).click();
    driver.findElement(By.id("input1")).click();
    driver.findElement(By.id("input1")).clear();
    driver.findElement(By.id("input1")).sendKeys("Primera Promo");
    driver.findElement(By.name("descripcion")).click();
    driver.findElement(By.name("descripcion")).clear();
    driver.findElement(By.name("descripcion")).sendKeys("Esta es la descripción de la primera promoción");
    driver.findElement(By.xpath("//button[@value='publicar']")).click();
    driver.findElement(By.id("IrCine")).click();
    driver.findElement(By.xpath("//td[@id='IrCine']")).click();
    driver.findElement(By.xpath("(//button[@type='button'])[3]")).click();
    driver.findElement(By.xpath("(//button[@type='button'])[5]")).click();
    assertEquals("Esta es la descripción de la primera promoción", driver.findElement(By.xpath("(//li[@id='listGroupItem'])[4]")).getText());
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
