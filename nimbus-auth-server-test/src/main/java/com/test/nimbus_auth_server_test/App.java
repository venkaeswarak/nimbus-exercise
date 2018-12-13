package com.test.nimbus_auth_server_test;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

import com.antheminc.oss.nimbus.domain.session.HttpSessionProvider;
import com.antheminc.oss.nimbus.domain.session.SessionProvider;
import com.antheminc.oss.nimbus.oauth2.DefaultOAuth2Config;

/**
 * Hello world!
 *
 */
@SpringBootApplication
@EnableConfigurationProperties
@EnableWebSecurity
@Import(value= {DefaultOAuth2Config.class})
@Configuration
@EnableAuthorizationServer
@EnableResourceServer
public class App{
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
	
	@Bean
	public SessionProvider sessionProvider() {
		return new HttpSessionProvider();
	}
	
	@Bean
	public List<AuthenticationProvider> authenticationProviderList() {
		List<AuthenticationProvider> providers = new ArrayList<AuthenticationProvider>();
		providers.add(testAuthenticationProvider());
		return providers;
	}

	@Bean
	public TestAuthenticationProvider testAuthenticationProvider() {
		return new TestAuthenticationProvider();
	}
	
}
