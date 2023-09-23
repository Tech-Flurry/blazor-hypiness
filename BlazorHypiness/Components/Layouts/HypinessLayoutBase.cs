using BlazorHypiness.Options;
using BlazorHypiness.Utilities;
using Microsoft.AspNetCore.Components;

namespace BlazorHypiness.Components.Layouts;

public abstract class HypinessLayoutBase : LayoutComponentBase
{
	private string? compiledCss;
	private readonly Dictionary<string, object> _inputAttributes = new( );

	protected string CompiledCss { get => compiledCss ??= BuildCss(new CssBuilder( )).Build( ); }
	protected IReadOnlyDictionary<string, object> InputAttributes => _inputAttributes;

	protected override void OnParametersSet( )
	{
		compiledCss = null;
		_inputAttributes.Clear( );
		base.OnParametersSet( );
	}

	[Parameter]
	public Colors BackgroundColor { get; set; } = Colors.Default;

	[Parameter]
	public string? CssClass { get; set; }

	protected virtual CssBuilder BuildCss(CssBuilder builder)
	{
		builder.Add(BackgroundColor switch
		{
			Colors.Default => "bg-white",
			Colors.Primary => "bg-primary-900",
			Colors.Secondary => "bg-secondary-900",
			Colors.Accent => "bg-accent-900",
			Colors.Error => "bg-error-900",
			Colors.Success => "bg-success-900",
			Colors.Dark => "bg-gray-900",
			_ => Constants.Strings.EMPTY_STRING
		});
		if (CssClass is not null)
			builder.Add(CssClass);
		return builder;
	}

	protected void AddAttribute(string name, object value)
	{
		_inputAttributes.Remove(name);
		_inputAttributes.Add(name, value);
	}
}
