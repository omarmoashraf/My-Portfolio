import { motion } from "motion/react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { time } from "console";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try{
      await emailjs.send(
        "service_q5g5e9e",
        "template_u5xygr6",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "rNY-tyEP0Gstq38U-"
      );
      toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    }
    catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    }
    
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "omarmoashraf0@gmail.com",
      href: "mailto:omarmoashraf0@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+201270532076",
      href: "tel:+201270532076",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/omarmoashraf",
      color: "hover:text-purple-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/omar-ashraf-ai/",
      color: "hover:text-blue-600",
    },
    
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-cyan-600/10" />
      
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 left-10 w-72 h-72 border border-blue-600/10 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Get In <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/5 to-blue-600/5 border border-purple-600/10 backdrop-blur-sm">
              <h3 className="mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-2 bg-background/50 border-purple-600/20 focus:border-purple-600/50"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-2 bg-background/50 border-purple-600/20 focus:border-purple-600/50"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="mt-2 bg-background/50 border-purple-600/20 focus:border-purple-600/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="mb-6">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-600/5 to-blue-600/5 border border-purple-600/10 hover:border-purple-600/30 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-foreground/60">{item.label}</p>
                        <p className="text-foreground group-hover:text-purple-600 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-600/5 to-blue-600/5 border border-purple-600/10">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-foreground/60">{item.label}</p>
                        <p className="text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/5 to-blue-600/5 border border-purple-600/10"
            >
              <h3 className="mb-6">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-600/20 flex items-center justify-center ${social.color} transition-all hover:scale-110 hover:border-purple-600/50`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-foreground/70">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Let's build something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
