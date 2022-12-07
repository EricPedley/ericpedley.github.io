Textbook: https://www.jirka.org/diffyqs/diffyqs.pdf

## Chapter 1 (First order equations)
- First order = only has first derivatives
- (1.1) Integrating both sides
- (TODO) (1.2) Slope fields and Picard's theorem for existence and uniqueness
- (1.3) Separable equations = divide out y terms and integrate
    - if you can separate and integratebut not solve for y, you're left with an implicit solution.
    - ex: 
        > $x^2y' = 1-x^2+y^2-x^2y^2, y(1)=0$   
        > is solvable by factoring then dividing.
- (1.4) Linear equations and integrating factor
    - linear equation is in form $$y'+p(x)y=f(x)$$
    - solvable with integrating factor
        - take integral of p, then multiply both sides by e to that function, factor LHS using product rule, then integrate both sides and solve.
    $$y=e^{-\int p(x)dx}(\int e^{\int p(x)dx}f(x)dx+C)$$
    - ex: 
- (1.5) Substitution
    - (1.5.1) changing variables
        - example:
            > $y'=(x-y+1)^2$  
            $v = x-y+1$  
            $v'=1-v^2$   
            solve in v, then substitute back
    - (1.5.2) Bernoulli equations
        - $y'+p(x)y=q(x)y^n$
        - Substitute $v=y^{1-n}$ and it becomes linear
    - (1.5.3) Homogenous Equations
        $$y'=F(y/x)$$
        - Substitute $v=\frac{y}{x}$
- (1.6) Autonomous equations
    - Autonomous means the derivative only depends on the dependent variable, like in $y'=f(y)$
    - Points on y axis where y'=0 are *critical points*
        - Stable -> close values converge, unstable -> close values diverge
    - Phase diagrams are 1-d line with critical points labeled and arrows in direction of the derivative. Both arrows towarwd a critical point are stable, both away is unstable, arrows in same direction through the critical point are semistable (generally can also be called unstable)
- Our class skips 1.7 (Numerical methods: Euler's method), 1.8 (Exact equations), and 1.9 (First order partial differential equations)
## Chapter 2 (Higher order equations)
- Higher order means 2nd, 3rd, etc. derivatives
- (2.1) Second order linear ODES are in the form
    $$A(x)y''+B(x)y'+C(x)y=f(x)$$
    - They're linear because all the y terms are linear, nothing like $y^2$
    - You can divide out $A(x)$ to make it simpler:
        - $$y''+p(x)y'+q(x)y=F(x)$$
        - if $F(x)=0$, the equation is "homogenous"
        - If you have two solutions, you can combine them like this:
            - $$y(x)=C_1y_1(x)+C_2y_2(x)$$
            - This property is called superposition
        - If you have one solution to a homogenous equation, you can get another by coming up with a $v(x)$ such that $y_2(x)=y_1(x)v(x)$. The explicit formula is
            - $$y_2(x)=y_1(x) \int\frac{e^{-\int p(x)dx}}{(y_1(x))^2}dx$$
            - The formula is derived from the above $v(x)$ method, plugging it back in, substituting so the equation becomes first order, then using integrating factor
- (2.2) Constant coefficient second order linear ODEs
    - $$ay''+by'+cy=0$$
    - Try substituting $y=e^rx$, then you get a polynomial in $r$, solve for the roots, plug back in for two solutions. If the roots are repeated, multiply one by x. If you get complex roots, just use euler's formula $e^{(\alpha+\beta i)x} = e^\alpha(\cos(\beta x) + i\sin(\beta x))$
- (2.3) Higher order equations
    - Higher order homogenous linear equations still have the superposition property.
    - (2.3.1) Linear Independence
        - You can prove functions are linearly independent by writing their superposition and setting it to 0
    - (2.3.2) Constant coefficient linear ODES
        - You can solve with $y=e^{rx}$ still like for 2nd order ones, but the polynomial will be higher order. For repeated roots, just keep multiplying by x.
- (2.4) Mechanical Vibrations
    - $$mx''+cx'+kx=F(t)$$
    - "Forced" := $F(t)$ is nonzero
    - "Damped" := $c$ is nonzero
    - $w_0=\sqrt{\frac{k}{m}}$ "angular frequency"
    - When F(t) = 0:
        - Overdamped: $c^2-4km>0$, critically damped when equal to zero, underdamped when less than zero.
- (2.5) Nonhomogenous equations
    - 
    
$$\frac{1}{(1+x)^2} = (\frac{1}{1-(-x)})^2 = (\sum_{k=0}^{\infty}(-x)^k)^2 = \sum_{k=0}^{\infty}(k+1)(-x)^k$$
$$\frac{x}{(1+x)^2} = x\sum_{k=0}^{\infty}(k+1)(-x)^k = $$
