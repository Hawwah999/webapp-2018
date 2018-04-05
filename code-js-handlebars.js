// code js handlebars

      const source = $('#handlebars-meteo').html();
      
      const template = Handlebars.compile(source);
      
      const context = { "ville": data.name, "temperature": data.main.temp + unite, "humidite": data.main.humidity + "%", "tendance": tendance, "imagemeteo": imgsource };
      
      const result = template(context);
      
      $(".jumbotron").html(result);